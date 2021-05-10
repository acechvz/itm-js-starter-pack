const { getByTestId, screen } = require("@testing-library/dom");
const { setDOMFromFile } = require("../utils/virtualDom");
const VirtualDOM = require("../utils/virtualDom");
require("@testing-library/jest-dom");

const HALF_LUCKY = 0.5;
const SMALL_TIMEOUT = 300;
const REGULAR_TIMEOUT = 500;
const LARGE_TIMEOUT = 800;
const MIN_SKELETONS_AMOUNT = 5;

jest.useFakeTimers();

describe("Async", () => {
  let dom;

  beforeEach(async () => {
    dom = await VirtualDOM.setDOMFromFile(
      "src/excercises/07-async/playground/index.html",
      {
        url: "http://localhost:8000/",
        resources: "usable",
        runScripts: "dangerously",
      }
    );
    dom.window.fetch = global.fetch;
  });

  it("should verify the usersList is populated with data", (done) => {
    const { container } = VirtualDOM;
    dom.window.fetch = global.fetch;
    jest.useRealTimers();

    setTimeout(() => {
      const usersList = getByTestId(container, "usersList");
      expect(usersList.childNodes).toHaveLength(5);
      expect(usersList.textContent.trim()).toMatch("");
      jest.runAllTimers();
      screen.debug(usersList);
      done();
    }, 1200);
  });
});
