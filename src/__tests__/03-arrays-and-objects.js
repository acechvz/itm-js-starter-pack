const Farm = require("../excercises/03-arrays-and-objects");
// const Farm = require("../final/03-arrays-and-objects");

describe("Arrays & Objects", () => {
  it("01. Should organize the birds correctly", () => {
    const _originalBirds = [...Farm.birds];
    Farm.organizeBirds();
    expect(Farm.birds).not.toEqual(_originalBirds);
  });

  it("02. Should move the piggy to the correct category", () => {
    Farm.movePiggy();
    expect(Farm.equines).not.toContain("🐷");
  });

  it("03. Should group all the animals together", () => {
    Farm.groupAnimals();
    expect(Farm.allAnimals).toEqual(expect.arrayContaining(Farm.birds));
    expect(Farm.allAnimals).toEqual(expect.arrayContaining(Farm.equines));
    expect(Farm.allAnimals).toEqual(expect.arrayContaining(Farm.cuties));
  });

  it("04. Should exclude unreal animals correctly", () => {
    Farm.realAnimals();
    expect(Farm.allAnimals.length).toBeGreaterThan(0);
    expect(Farm.allAnimals).not.toEqual(expect.arrayContaining(["🦄"]));
  });

  it("05. Should categorize all the animals properly", () => {
    Farm.animalsCategorized();

    expect(Farm.allAnimals.length).toBeGreaterThan(0);
    Farm.allAnimals.forEach((animal) => {
      expect(animal).toEqual(
        expect.objectContaining({
          animal: expect.any(String),
          category: expect.any(String),
        })
      );
    });
  });

  it("06. Should set all the animals free properly", () => {
    Farm.animalsFree();
    expect(Farm.allAnimals.length).toBeGreaterThan(0);
    expect(Farm.allAnimals.filter((animal) => !animal.isFree).length).toEqual(
      0
    );
  });
});
