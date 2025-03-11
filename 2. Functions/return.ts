// Regular Functions

// For this function, TS will automatically refer that the returned value will be of type Number
function squarePower(x: number) {
  return x * x;
}

// U can add a return annotation if U want to
function squarePower1(x: number): number {
  return x * x;
}

// Arrow Functions
const squarePower2 = (x: number): number => x * x;

// ERROR
// const squarePower3 = (x: number): number => `Result = ${x * x}`; Type 'string' is not assignable to type 'number'.
