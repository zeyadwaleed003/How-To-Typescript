// Regular Function
function addOne(num: number) {
  return num + 1;
}

console.log(addOne(4));

// Arrow Function
const mul = (x: number, y: number) => x * y;
console.log(mul(3, 4));

// ERROR
// const ans = mul(3, 4, 5); Expected 2 arguments, but got 3.
// const ans = mul(3, 'Zeyad'); Argument of type 'string' is not assignable to parameter of type 'number'.
