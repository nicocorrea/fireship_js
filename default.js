// * Remember that PROTOTYPE works in the form of a chain/tree to real instances of the object,
// * and when changing those from the parent, it changes those then referenced by the child object.

const animal = {
  dna: "ATCG",
};

const dog = {
  face: "🐺",
};

Object.setPrototypeOf(dog, animal);

Object.getPrototypeOf(dog) === animal; // true

Object.getPrototypeOf(animal) === Object.prototype; // true

Object.getPrototypeOf(Object.prototype) === null; // true

// * OBJECT DESTRUCTURING

const person = {
  name: "John",
  age: 32,
  city: "New York",
  country: "USA",
};

const { name, age } = person;

// Object destructuring with alias

const { name: firstName, age: years } = person;

// Array destructuring
const fruits = ["apple", "banana", "orange"];
const [first, second, third] = fruits;

// * The SPREAD syntax/operator used to combine objects/arrays

const obj1 = {
  name: "Nico",
  age: 36,
};

const obj2 = {
  age: 40,
  hasCar: true,
};

const combined_option1 = Object.assign({}, obj1, obj2);
const combined_option2 = { ...obj1, ...obj2 };

console.log(combined_option1);
console.log(combined_option2);

const list_1 = [1, 2, 3, 4];
const list_2 = [3, 4, 5, 6];

const combined_list = [...list_1, ...list_2];

console.log(combined_list);

// * OPTIONAL CHAINING to avoid throwing errors. From what I could see, the object/function/list must exist.

const company = {
  name: "Philip Morris",
};
console.log(company?.name);
console.log(company?.nico);

function printMagicIndex(arr) {
  console.log(arr?.[2]);
}

printMagicIndex([0, 1, 2, 3, 4, 5]); // 2
printMagicIndex(); // undefined; if not using ?., this would throw

/*
 * Nullish coalescing is a relativly new operator that was introduced in ES2020.
 * It is similar to the logical OR operator ||, but it only returns the right-hand side
 * if the left-hand side is null or undefined.
 */

const foo_1 = null ?? "bar";
console.log(foo_1);

const foo_2 = 0 ?? "bar";
console.log(foo_2);

/*
 * HIGHER ORDER FUNCTIONS is a function that takes a function as an argument, or returns a function.
 * Used for abstracting away complexity.
 *
 * Note that "function name(a, b, c){}" is a function declaration, and
 * "const math = function(a, b, c){}"" is a function expression.
 */

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function math(x, y, operator) {
  return operator(x, y);
}

console.log(math(4, 4, add));

function funWrapper(callback) {
  callback("Called by wrapper");
}

funWrapper((m) => console.log(m)); // "Called by wrapper"

/*
 * A CLOSURE is a function that has access to the parent scope, even after the parent function has closed.
 * JS will automatically store the state of a closure in the heap memory, even after the parent function has returned.
 * This behavior makes them useful for encapsulating private variables.
 */

function encapsulatedState(x) {
  let state = 10;
  return function () {
    state += x;
    return state;
  };
}

const testClosure = encapsulatedState(10);

console.log(testClosure()); // 20
console.log(testClosure()); // 30
console.log(testClosure()); // 40

/*
 * ARRAY TRICKS
 * The example below is for creating a range of numbers
 */

const range_1 = Array(100)
  .fill(0)
  .map((_, i) => i + 1);

const range_2 = [...Array(100).keys()];

console.log(range_1);
console.log(range_2);

// Remove duplicates from an array
const unique = [...new Set(range_1)];

// Get a random element
const random = range_1[Math.floor(Math.random() * range_1.length)];

console.log(random);

// Loop over a key-value pair
for (const [i, val] of range_1.entries()) {
  console.log(i, val);
}

/*
 Array methods to know
 
 arr.forEach()
 arr.map()
 arr.filter()
 arr.find()
 arr.findIndex()
 arr.reduce()
*/
