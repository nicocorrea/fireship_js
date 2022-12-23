/* Remember that PROTOTYPE works in the form of a chain/tree to real instances of the object,
 and when changing those from the parent, it changes those then referenced by the child object */

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
