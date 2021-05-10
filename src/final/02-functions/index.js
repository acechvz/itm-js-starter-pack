// Examples
// Hello World
function greetWorld() {
  return "Hello World!";
}

// IIFE
(function () {
  var myVariable = "Inside";
  console.log("Hello World");
  console.log(myVariable);
})();

// Space Launch ⭐
const launchRocket = () => {
  const astronautName = "Frederic";
  const spaceshipName = "SpaceX";

  let count = 1;
  for (let timer = 5; timer > 0; timer--) {
    setTimeout(() => {
      console.log("Preparing " + astronautName + " to launch in " + timer);
      if (timer === 1) {
        console.log(spaceshipName + " launched 🚀");
      }
    }, 1000 * count);
    count++;
  }
};

// 📝 Your tasks
// [x] - Create the function "add"
function add(a, b) {
  return a + b;
}
// [x] - Create the function "subtract"
function subtract(a, b) {
  return a - b;
}
// [x] - Create the function "multiply"
function multiply(a, b) {
  return a * b;
}
// [x] - Create the function "divide"
function divide(a, b) {
  return a / b;
}

module.exports = {
  greetWorld,
  launchRocket,
  add,
  subtract,
  multiply,
  divide,
};
