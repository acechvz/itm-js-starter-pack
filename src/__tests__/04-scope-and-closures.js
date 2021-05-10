const { sum, modulePattern } = require("../excercises/04-scope-and-closures");
// const { sum, modulePattern } = require('../excercises/04-scope-and-closures');

describe("Regular Fns", () => {
  it("should sum a number using closures", () => {
    const addTwo = sum(2);

    expect(addTwo(3)).toEqual(5);
    expect(addTwo(10)).toEqual(12);
  });
});

describe("Closures", () => {
  it("should update the name value properly", () => {
    const { getPerson } = modulePattern;

    const person = getPerson();
    expect(person.getName()).toEqual("Alan");
    person.setName("Pedro");
    expect(person.getName()).toEqual("Pedro");
  });
});
