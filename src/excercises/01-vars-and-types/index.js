const playground = () => {
  // Numbers
  console.log('---- Numbers ----');
  var someNumber;
  var a = '10';
  var ab = a + 2; // Take a look at this!
  var ac = Number(a) + 2; // The joy of casting :D

  console.log(a);
  console.log(ab);
  console.log(ac);
  console.log(ac + someNumber); // This is not a number! NaN
  console.log(isNaN(ac + someNumber)); // : true, I told you :P

  // Strings
  console.log('---- Strings ----');
  var myName = 'Peter Parker';
  otherName = new String('4 + 4');
  var message = `${myName} says ${otherName} is equal to 8`;

  console.log(myName.length); // We can now the length of a String
  console.log(myName.charAt(3)); // A single character
  console.log(myName[3]); // This looks like an array :o
  console.log(message.slice(0, 4)); // You can get a range of characters
  console.log(message.__proto__); // WTF is this?
  console.log(Object.getPrototypeOf(otherName)); // This is another way to know the prototype

  console.log('---- Arrays ----');
  var arr = [0, 1, 2, 3, 4];
  console.log(typeof arr); // :object, please don't hate JS :C
  console.log(arr.length);
  console.log(arr.slice(0, 3)); // : [0,1,2], Yayy!
  console.log(arr.splice(3)); // : [ 3, 4], Seems legit
  console.log(arr.length); // : 3, WTF?

  // Arrays are not exclusive for a specific type
  const mixedArray = [
    10,
    true,
    () => {
      console.log('damn!');
      return 'Exiting!';
    },
    "We don't need keys :P",
    {
      id: 20,
      balance: 300,
      currency: 'USD',
    },
    ['Some text', 'that should be enough', 'to explain something'],
  ];

  const person = {
    name: 'ITM Student',
    age: 23,
    hoobies: ['Read', 'Study', 'Code', 'Eat Pizza!'],
  };

  if (true) {
    var bar = 'I can mess around';
  }

  console.log(bar);

  // You shouldn't update anything below this line
  return {
    // foo,
    mixedArray,
  };
};

playground();

module.exports = {
  playground,
};
