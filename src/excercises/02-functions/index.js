function sum(num1) {
  return (num2) => {
    return num1 + num2;
  };
}

const getPerson = () => {
  let name = 'Alan';

  const getName = () => name;
  const setName = (newName) => (name = newName);

  return { getName, setName };
};

module.exports = {
  sum,
  getPerson,
};
