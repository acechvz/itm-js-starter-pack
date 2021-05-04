const { generatePersons } = require('../../utils');

// Destructuring
const persons = generatePersons(10);

const [{ name, city }] = persons;
