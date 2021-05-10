const path = require("path");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const VirtualDOM = (() => {
  let document = JSDOM.fragment(`<div id="app"></div>`);
  const domOptions = {
    runScripts: "dangerously",
  };

  const setDOMFromFile = (url = null, options = domOptions) => {
    if (!url) throw Error("You need to specify a path to load the HTML");

    return new Promise(async (res, rej) => {
      try {
        const newDom = await JSDOM.fromFile(path.join(url), domOptions);
        document = newDom.window.document.body;
        res(newDom);
      } catch (error) {
        console.log(error);
        rej();
      }
    });
  };

  return {
    get container() {
      return document;
    },
    setDOMFromFile,
  };
})();

module.exports = VirtualDOM;
