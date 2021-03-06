/**
 * @file Challenges for the topic "Arrays & Objects"
 * @author Alan ChΓ‘vez <acechvz@gmail.com>
 */

// Jonh and Ally's Farm π§βπΎ π©βπΎ π
const FarmModule = (() => {
  // They grouped them into different categories
  let birds = ["π", "π€", "π¦", "π£", "π¦", "π€", "π¦", "π¦", "π"];
  let equines = ["π", "π¦", "π¦", "π΄", "π·"];
  let cuties = ["π¦", "π±", "π­", "π¨", "πΌ"];
  let allAnimals = [];

  // Their goal is to organize them better so all the animals can be happy

  // ## Organize the birds
  const organizeBirds = () => {
    // 01. π Your tasks
    // [ ] - Make all the birds be near of their similar specie
    // π¨βπ» Your code here
  };

  // ## Move the piggy
  // John and Ally noticed that a little pig is with the equines.
  const movePiggy = () => {
    // 02. π Your tasks
    // [ ] - Move the "π·" to the "cuties" category and remove it from the "equines"
    // π¨βπ» Your code here
  };

  // ## All the Animals Grouped
  // Jonh and Ally wants their animals to interact with everyone
  const groupAnimals = () => {
    // 03. π Your tasks
    // [ ] - Create a new array "allAnimals" with all the animals living together
    // π¨βπ» Your code here
  };

  // ## Real Animals
  // Jonh and Ally feels like some animals is not real, can you help them find it?
  const realAnimals = () => {
    // 04. π Your tasks
    // [ ] - Find all the "π¦" and remove them
    // π¨βπ» Your code here
  };

  // ## Animals Categorized
  // Jonh and Ally now wants to re-categorize all the animals
  // but they now want to keep all of them together but with a tag.
  const animalsCategorized = () => {
    // 05. π Your tasks
    // [ ] - Create an object "farmAnimals" by adding each of the array names in it
    // π¨βπ» Your code here
    // [ ] - Iterate over the "farmAnimals" object and create a single array of animals
    // [ ] - While iterating them create a new object with the shape:
    //       Expected Shape: { animal: [ANIMAL_ICON], category: [ANIMAL_CATEGORY] }
    // [ ] - Remember to exclude non real animals "π¦"
    // π¨βπ» More extra code here
  };

  // ## Animals Free
  // Jonh and Ally decided to set free all the animals
  const animalsFree = () => {
    // 06. π Your tasks
    // [ ] - Iterate over "allAnimals"
    // [ ] - Add to each animal a new property "isFree"
    // [ ] - The "isFree" property should be set to true
    // π¨βπ» Your code here`
  };

  // π Don't make changes below this line
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
