const generatePersons = (quantity = 5) => {
  if (!Number.isInteger(quantity) && typeof quantity !== "number") return [];

  return new Array(quantity).fill(null).map((el, idx) => ({
    name: `Person ${idx + 1}`,
    city: `City ${idx + 1}`,
    enabled: false,
  }));
};

module.exports = {
  generatePersons,
};
