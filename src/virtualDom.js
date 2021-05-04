const { Script } = require('vm');
const jsdom = require('jsdom');
const prettyFormat = require('pretty-format');
const { htmlElementToDisplay } = require('./utils');
const { DOMElement, DOMCollection } = prettyFormat.plugins;
const { JSDOM } = jsdom;

function prettyDOM(htmlElement) {
  const debugContent = prettyFormat(htmlElement, {
    plugins: [DOMElement, DOMCollection],
    printFunctionName: false,
    highlight: true,
  });
  const maxLength = process.env.DEBUG_PRINT_LIMIT || 7000;
  return htmlElement.outerHTML.length > maxLength
    ? `${debugContent.slice(0, maxLength)}...`
    : debugContent;
}

const VirtualDOM = (() => {
  let domContainer = null;

  const init = () => {
    domContainer = new JSDOM(
      `
      <!DOCTYPE html>
      <head><title>Javascript Starter Pack</title></head>
      <body>
          <div id="app"></div>
      </body>`
    );
  };

  const handlePrettyPrint = () => {
    const {
      window: {
        document: { body },
      },
    } = domContainer;
    console.log(prettyDOM(body));
  };

  init();

  return {
    debug: handlePrettyPrint,
    get container() {
      return {
        document: domContainer.window.document,
        append: (el) => {
          const elementsArr = el.length > 1 ? el : [el];
          elementsArr.forEach((domEl) => {
            domContainer.window.document.querySelector('#app').append(domEl);
          });
        },
      };
    },
  };
})();

module.exports = VirtualDOM;
