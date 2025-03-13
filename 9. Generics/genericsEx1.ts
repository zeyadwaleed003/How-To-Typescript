// What if I want to print specific variables but I don't know what are these variables types???
// We will need to write the same code but for different types

function printNumbers(var1: number, var2: number): [number, number] {
  return [var1, var2];
}

function printStrings(var1: string, var2: string): [string, string] {
  return [var1, var2];
}

function printBooleans(var1: boolean, var2: boolean): [boolean, boolean] {
  return [var1, var2];
}

// console.log(printNumbers(2, 3));
// console.log(printStrings('Zeyad', 'Waleed'));
// console.log(printBooleans(true, false));

// This duplicated code is not a good thing, what about doing the same but in one function???
// We will need to use the 'Any' type

function printVariables(var1: any, var2: any): [any, any] {
  return [var1, var2];
}

// But this function is BAD, we now just writing a NON typed code in Typescriot
// The solution for this is to use something called 'Generics'

function printInfo<T>(var1: T, var2: T): [T, T] {
  return [var1, var2];
}

const numbers = printInfo<number>(2, 3);
const strings = printInfo<string>('Zeyad', 'Waleed');
const booleans = printInfo<boolean>(true, false);

console.log(numbers);
console.log(strings);
console.log(booleans);

// T => is a custom type we want: string, number, boolean
// It also can be something like interfaces,..

interface Cat {
  name: string;
  breed: string;
}

const cat1 = printInfo<Cat>(
  { name: 'Waffle', breed: 'some breed' },
  { name: 'Olala', breed: 'Tangana breed' }
);
console.log(cat1);
