function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // 1. import React ReactDOM
// 2. get the API url
// 3. create the layout (box + inner content)
// 4. add event listeners
// 5. style
// 6. complete user stories

const API = 'https://www.json-generator.com/api/json/get/cpnHAyAaKW?indent=2';

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quotes: [
      {
        quote: "Where the sunshine comes, that is our stage . Where the rain water collects, that is our stage . Where the future performs , that is our stage. We are from SAMIDHA and We are one!",
        author: "Sandip Bhaidya" }],


      index: 0 });_defineProperty(this, "getRandomIndex",












    () => {
      const { quotes } = this.state;

      if (quotes.length > 0) {
        const index = Math.floor(Math.random() * quotes.length);
        this.setState({
          index });

      }
    });}componentDidMount() {// call the API and update state
    fetch(API).then(res => res.json()).then(res => {this.setState({ quotes: res.quotes }, this.getRandomIndex);});}
  render() {
    const { quotes, index } = this.state;

    const quote = quotes[index];

    const tweetURL = `https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`;

    return (
      React.createElement("div", { className: "wrapper d-flex align-items-center justify-content-center" },
      React.createElement("div", { className: "col-6 box p-4 rounded", id: "quote-box" },

      quote &&
      React.createElement("div", { className: "mb-4" },
      React.createElement("h5", { id: "text", class: "text-large" },
      React.createElement("i", { className: "fas fa-2x fa-quote-left" }),
      quote.quote),

      React.createElement("cite", { className: "d-block text-right", id: "author" }, "- ",
      quote.author)),




      React.createElement("div", { className: "d-flex justify-content-between" },
      React.createElement("a", { className: "btn btn-sm btn-primary",
        target: "_blank", href: tweetURL, id: "tweet-quote" },
      React.createElement("i", { className: "fab fa-twitter" }), " Tweet"),


      React.createElement("button", { className: "btn btn-sm btn-primary",
        onClick: this.getRandomIndex, id: "new-quote" },
      React.createElement("i", { className: "fas fa-random" }), " Get CAPTION")))));





  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
