/**
 * @file Playground to test your JS code against a DOM
 * @author Alan Chávez <acechvz@gmail.com>
 * @copyright Alan Chávez 2021
 * @license MIT
 */

const VirtualDOM = require("./utils/virtualDom");
const { getByText, getByTestId } = require("@testing-library/dom");

VirtualDOM.setDOMFromFile("src/excercises/01-vars-and-types/index.html").then(
  (res) => {
    const { container } = VirtualDOM;
    const button = getByText(container, /Click/g);
    const resetBtn = getByText(container, /Reset/);
    const result = getByTestId(container, "result");

    button.click(); // 1

    resetBtn.click(); //
  }
);
