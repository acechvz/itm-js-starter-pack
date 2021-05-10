// 📝 Your tasks:
// [] - Create a "sum" function to receive a number as param
// [] - Return from your "sum" function another function that will receive again a number as param
// [] - Figure out a way to achieve the behavior of the "sum" function to be something like:
//      sum(2)(3) -> 5 should be returned

// Hint 🔍 : Remember that a Closure is a function that can remember its scope
// 👨‍💻 Your code here
function sum(num1) {
  return (num2) => {
    return num1 + num2;
  };
}

/**
 * The purpose of this function is to give us access to private variables from the "outside"
 * Remember that we talked about the "Module Pattern" in Javascript :D
 */
const getPerson = () => {
  // 📝 Your tasks
  // [] - Declare a variable "name" (we want to change its value later)
  let name = "Alan";
  // [] - Create a getName function to return the "name" variable
  const getName = () => name;
  // [] - Create a setName function to update the "name" variable
  const setName = (newName) => (name = newName);

  // [] - Expose these two methods by returning an object.
  return {
    getName,
    setName,
  };
};

// Don't modifiy anything below this line
module.exports = {
  sum,
  modulePattern: {
    getPerson,
  },
};
