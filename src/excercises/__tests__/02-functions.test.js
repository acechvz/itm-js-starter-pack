const { sum, getPerson } = require('../02-functions');

describe('Topic - Functions', () => {
  it('should sum a number using closures', () => {
    const addTwo = sum(2);

    expect(addTwo(3)).toEqual(5);
    expect(addTwo(10)).toEqual(12);
  });

  it('should update a private variable', () => {
    const person = getPerson();
    expect(person.getName()).toEqual('Alan');
    person.setName('Pedro');
    expect(person.getName()).toEqual('Pedro');
  });
});
