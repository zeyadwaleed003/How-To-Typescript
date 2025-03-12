const nums4: number[] = [1, 2, 3, 4];

// Normal Destructuring
const [one, two, three] = nums4;
console.log(one, two, three);

// Tuples

// First element MUST be string, second MUST be a number, third MUST be a boolean
const game: [string, number, boolean] = ['Game 1', 2, true];
