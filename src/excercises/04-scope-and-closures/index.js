/**
 * @file Challenges for the topic "Scopes and Closures"
 * @author Alan ChΓ‘vez <acechvz@gmail.com>
 */

// π Your tasks:
// Hint π : Remember that a Closure is a function that can remember its scope
// [] - Create a "sum" function to receive a number as param
// [] - Return from your "sum" function another function that will receive again a number as param
// [] - Make the "sum" function to be executed like:
//    - Execution example: calling sum(2)(3) should return 5
function sum() {
  // π¨βπ» Your code here
}

/**
 * The purpose of this function is to give us access to private variables from the "outside"
 */
const getPerson = () => {
  // π Your tasks
  // [] - Declare a variable "name" (we want to change its value later)
  // [] - Create a getName function to return the "name" variable
  // [] - Create a setName function to update the "name" variable
  // [] - Return these two methods by returning an object with their names as keys
};

// π Don't make changes below this line
module.exports = {
  sum,
  modulePattern: {
    getPerson,
  },
};
