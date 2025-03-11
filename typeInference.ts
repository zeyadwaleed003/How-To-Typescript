/*
Type Inference: 
  It is a feature in Typescript that allows the compiler to automatically
  determine the type of a variable based on it's value. 

  If U declare a variable without explicitly specifying it's type, TS will 
  try to infer the type based on the value U assign to it.
*/

let tech = 'Typescript'; // Compiler automatically knows this variable is a string

// ERROR
// tech = 12;

const num1 = 11;
const isMad = true;

console.log(typeof tech);
console.log(typeof num1);
console.log(typeof isMad);
