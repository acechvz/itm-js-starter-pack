// Global Constants
const STORAGE_EDITOR_KEY = "editorCode";

// Babel config to allow use ES6 in the code editor
const BabelLoader = (() => {
  const babelOptions = {
    presets: ["react", ["es2015", { modules: false }]],
  };

  const preprocess = (str) => {
    const { code } = Babel.transform(str, babelOptions);
    return code;
  };
  const execute = (code, callback = () => {}) => {
    localStorage.setItem(STORAGE_EDITOR_KEY, JSON.stringify({ code }));
    try {
      new Function(preprocess(code))();
      callback();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    execute,
  };
})();

// Code editor module handler
const Editor = (() => {
  // Local Constants
  const AUTOSAVE_TIMEOUT = 1200;
  const EDITOR_DEFAULT_OPTS = {
    value: "",
    mode: "javascript",
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    theme: "ayu-mirage",
    height: "auto",
  };

  const codeEditorContent = localStorage.getItem(STORAGE_EDITOR_KEY)
    ? JSON.parse(localStorage.getItem(STORAGE_EDITOR_KEY)).code
    : EDITOR_STARTER_GUIDE;
  const editor = CodeMirror.fromTextArea(
    document.querySelector("#code"),
    EDITOR_DEFAULT_OPTS
  );
  const save = () => BabelLoader.execute(editor.getValue());

  // Initializers
  function init() {
    // Editor extra configs
    editor.setValue(codeEditorContent);
    editor.setOption("extraKeys", { "Ctrl-S": save, "Cmd-S": save });
    editor.focus();

    CodeMirror.normalizeKeyMap();
    document.body.addEventListener("click", () => editor.focus());

    // Interval to autosave code editor changes
    setInterval(() => {
      localStorage.setItem(
        STORAGE_EDITOR_KEY,
        JSON.stringify({ code: editor.getValue() || EDITOR_STARTER_GUIDE })
      );
    }, AUTOSAVE_TIMEOUT);
  }

  init();

  return {
    get instance() {
      return editor;
    },
  };
})();

// Initial Animals Structures
let _birds = ["🐔", "🐤", "🐦", "🐣", "🦄", "🐤", "🐦", "🐦", "🐔"];
let _equines = ["🐎", "🦓", "🦄", "🐴", "🐷"];
let _cuties = ["🦄", "🐱", "🐭", "🐨", "🐼"];

// Array copies to play safe
let birds = [..._birds];
let equines = [..._equines];
let cuties = [..._cuties];
let allAnimals = [];
let animalsFree = [];

const Playground = (() => {
  const birdsContainer = document.querySelector("#birds");
  const equinesContainer = document.querySelector("#equines");
  const cutiesContainer = document.querySelector("#cuties");
  const allContainer = document.querySelector("#all");
  const freeContainer = document.querySelector("#free");

  // Playground Functions
  function updateContent() {
    displayAnimals();
    birdsContainer.innerHTML = birds.join("");
    equinesContainer.innerHTML = equines.join("");
    cutiesContainer.innerHTML = cuties.join("");
    freeContainer.innerHTML = animalsFree.join("");
    allContainer.innerHTML = allAnimals.join("");
  }

  function resetContent() {
    console.log("Resetting content");
    birds = [..._birds];
    equines = [..._equines];
    cuties = [..._cuties];
    allAnimals = [];
    animalsFree = [];

    updateContent();
  }

  function displayAnimals() {
    const simpleAnimal = (animal) =>
      `<div class="bg-gray-200 shadow-md inline-flex justify-center p-2 items-center" data-ref="animal-item">
      <span class="w-8">${animal}</span>
    </div>`;

    const detailedAnimal = (animal) =>
      `<div class="bg-gray-200 shadow-md inline-flex justify-between p-2 items-center" data-ref="animal-item">
        <span class="w-8">${animal.animal}</span>
        <span><span class="inline-block p-2 bg-gray-100 rounded-lg text-xs">${
          animal.category
        }</span></span>
        <span class="text-gray-500 text-sm">${
          !animal.isFree ? "🔒" : "🆓"
        }</span>
      </div>`;

    if (typeof allAnimals[0] === "string") {
      allAnimals = animals.map(simpleAnimal).join("");
    } else {
      let isFreeAnimal = allAnimals.some((animal) => animal.isFree);
      console.log(isFreeAnimal);
      if (isFreeAnimal) {
        animalsFree = allAnimals.map(({ animal }) => simpleAnimal(animal));
        allAnimals = [];
      } else {
        animalsFree = [];
        allAnimals = allAnimals.map(detailedAnimal);
      }
    }
  }

  function setListeners() {
    // Play button to run editor scripts
    document
      .querySelector("[data-testid=buttonPlay]")
      .addEventListener("click", () =>
        BabelLoader.execute(Editor.instance.getValue(), updateContent)
      );

    // Reset button to refresh the playground data
    document
      .querySelector("[data-testid=buttonReset]")
      .addEventListener("click", resetContent);
  }

  // Function to initialize the playground
  function init() {
    console.log("Init playground");
    updateContent();
    setListeners();
  }

  init();
})();
