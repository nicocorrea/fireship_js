// ? Remember that PROTOTYPE works in the form of a chain/tree to real instances of the object,
// ? and when changing those from the parent, it changes those then referenced by the child object.

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

// ? OBJECT DESTRUCTURING

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

// ? The SPREAD syntax/operator used to combine objects/arrays

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
