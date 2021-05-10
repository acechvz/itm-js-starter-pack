/**
 * @file Challenges for the topic "Arrays & Objects"
 * @author Alan Chávez <acechvz@gmail.com>
 */

// Jonh and Ally's Farm 🧑‍🌾 👩‍🌾 🚜
const FarmModule = (() => {
  // They grouped them into different categories
  let birds = ["🐔", "🐤", "🐦", "🐣", "🦄", "🐤", "🐦", "🐦", "🐔"];
  let equines = ["🐎", "🦓", "🦄", "🐴", "🐷"];
  let cuties = ["🦄", "🐱", "🐭", "🐨", "🐼"];
  let allAnimals = [];

  // Their goal is to organize them better so all the animals can be happy

  // ## Organize the birds
  const organizeBirds = () => {
    // 01. 📝 Your tasks
    // [ ] - Make all the birds be near of their similar specie
    // 👨‍💻 Your code here
  };

  // ## Move the piggy
  // John and Ally noticed that a little pig is with the equines.
  const movePiggy = () => {
    // 02. 📝 Your tasks
    // [ ] - Move the "🐷" to the "cuties" category and remove it from the "equines"
    // 👨‍💻 Your code here
  };

  // ## All the Animals Grouped
  // Jonh and Ally wants their animals to interact with everyone
  const groupAnimals = () => {
    // 03. 📝 Your tasks
    // [ ] - Create a new array "allAnimals" with all the animals living together
    // 👨‍💻 Your code here
  };

  // ## Real Animals
  // Jonh and Ally feels like some animals is not real, can you help them find it?
  const realAnimals = () => {
    // 04. 📝 Your tasks
    // [ ] - Find all the "🦄" and remove them
    // 👨‍💻 Your code here
  };

  // ## Animals Categorized
  // Jonh and Ally now wants to re-categorize all the animals
  // but they now want to keep all of them together but with a tag.
  const animalsCategorized = () => {
    // 05. 📝 Your tasks
    // [ ] - Create an object "farmAnimals" by adding each of the array names in it
    // 👨‍💻 Your code here
    // [ ] - Iterate over the "farmAnimals" object and create a single array of animals
    // [ ] - While iterating them create a new object with the shape:
    //       Expected Shape: { animal: [ANIMAL_ICON], category: [ANIMAL_CATEGORY] }
    // [ ] - Remember to exclude non real animals "🦄"
    // 👨‍💻 More extra code here
  };

  // ## Animals Free
  // Jonh and Ally decided to set free all the animals
  const animalsFree = () => {
    // 06. 📝 Your tasks
    // [ ] - Iterate over "allAnimals"
    // [ ] - Add to each animal a new property "isFree"
    // [ ] - The "isFree" property should be set to true
    // 👨‍💻 Your code here`
  };

  // 🛑 Don't make changes below this line
  return {
    get birds() {
      return birds;
    },
    get equines() {
      return equines;
    },
    get cuties() {
      return cuties;
    },
    get allAnimals() {
      return allAnimals;
    },
    organizeBirds,
    movePiggy,
    groupAnimals,
    realAnimals,
    animalsCategorized,
    animalsFree,
  };
})();

module.exports = FarmModule;
