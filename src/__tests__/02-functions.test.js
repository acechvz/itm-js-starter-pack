const { getByTestId } = require("@testing-library/dom");
require("@testing-library/jest-dom");
const VirtualDOM = require("../utils/virtualDom");
const {
  greetWorld,
  add,
  subtract,
  multiply,
  divide,
  launchRocket,
} = require("../excercises/02-functions");

describe("Functions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should verify the 'greetWorld' method works properly", () => {
    const greetMessage = greetWorld();

    expect(greetMessage).toEqual("Hello World!");
  });

  it('should verify the "add" method works properly', () => {
    expect(add(2, 2)).toEqual(4);
  });

  it('should verify the "subtract" method works properly', () => {
    expect(subtract(4, 2)).toEqual(2);
  });

  it('should verify the "multiply" method works properly', () => {
    expect(multiply(4, 2)).toEqual(8);
  });

  it('should verify the "divide" method works properly', () => {
    expect(divide(4, 2)).toEqual(2);
  });

  it("should launch a man to the space", () => {
    console.log = jest.fn();
    jest.useFakeTimers();
    launchRocket();

    jest.runAllTimers();
    expect(console.log).toHaveBeenCalledTimes(6);
  });
  describe("DOM Excercise", () => {
    beforeEach(async () => {
      await VirtualDOM.setDOMFromFile(
        "src/excercises/02-functions/playground/index.html"
      );
      // await VirtualDOM.setDOMFromFile("src/final/02-functions/playground/index.html");
    });

    it("should validate all the elements", () => {
      const { container } = VirtualDOM;
      const increaseButton = getByTestId(container, "increaseCounter");
      const decreaseButton = getByTestId(container, "decreaseCounter");
      const resetBtn = getByTestId(container, "resetButton");
      const counter = getByTestId(container, "counter");

      expect(increaseButton).toBeInTheDocument();
      expect(decreaseButton).toBeInTheDocument();
      expect(resetBtn).toBeInTheDocument();
      expect(counter).toBeInTheDocument();
    });

    it("should increase the counter properly", () => {
      const { container } = VirtualDOM;
      const button = getByTestId(container, "increaseCounter");
      const counter = getByTestId(container, "counter");

      button.click(); // 1
      expect(counter.textContent).toMatch("1");
    });

    it("should decrease the counter properly", () => {
      const { container } = VirtualDOM;
      const button = getByTestId(container, "decreaseCounter");
      const counter = getByTestId(container, "counter");

      button.click(); // 1
      expect(counter.textContent).toMatch("-1");
    });

    it("should reset the counter properly", () => {
      const { container } = VirtualDOM;
      const button = getByTestId(container, "increaseCounter");
      const resetBtn = getByTestId(container, "resetButton");
      const counter = getByTestId(container, "counter");

      button.click(); // 1
      button.click(); // 2
      button.click(); // 3
      expect(counter.textContent).toMatch("3");

      button.click(); // 4

      resetBtn.click();
      expect(counter.textContent).toEqual("0");
    });

    it("should verify the errorMessage is show/hide properly", () => {
      const { container } = VirtualDOM;
      const button = getByTestId(container, "increaseCounter");
      const resetBtn = getByTestId(container, "resetButton");
      const counter = getByTestId(container, "counter");
      const errorMessage = getByTestId(container, "errorMessage");

      expect(errorMessage.classList.contains("opacity-0")).toEqual(true);

      button.click(); // 1
      button.click(); // 2
      button.click(); // 3
      button.click(); // 4

      expect(errorMessage.classList.contains("opacity-0")).not.toEqual(true);

      resetBtn.click();
      expect(errorMessage.classList.contains("opacity-0")).toEqual(true);
    });
  });
});
