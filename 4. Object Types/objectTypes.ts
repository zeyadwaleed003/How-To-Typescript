// Object Annotation
const person: { firstName: string; lastName: string; age: number } = {
  firstName: 'Zeyad',
  lastName: 'Waleed',
  age: 21,
};

console.log(`Person name: ${person.firstName} ${person.lastName}`);

// Without Annotation | Same JS syntax | TS automatically assign fields types
const person1 = {
  firstName: 'Madada',
  lastName: 'Daloly',
  age: 39,
};

console.log(`Person name: ${person1.firstName} ${person1.lastName}`);

// ERROR | Missing field!
// const person2: { firstName: string; lastName: string; age: number } = {
//   firstName: 'Zeyad',
//   lastName: 'Waleed',
// };

// Property 'age' is missing in type '{ firstName: string; lastName: string; }' but required in type '{ firstName: string; lastName: string; age: number; }'.

// Using Objects as Function Return Value
function person2(): { firstName: string; lastName: string; age: number } {
  return {
    firstName: 'Elanga',
    lastName: 'Kamomo',
    age: 20,
  };
}

console.log(person2().firstName);
