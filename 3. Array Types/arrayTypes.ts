// Using square brackets
const nums: number[] = [1, 2, 3, 4];
nums.push(5);

// ERROR
// nums.push('six'); Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(nums);

// Using generic notation
const names: Array<string> = ['Zeyad', 'Mohamed', 'Ahmed'];
names.push('Ebrahim');

// ERROR
// names.push(true); Argument of type 'boolean' is not assignable to parameter of type 'string'.
console.log(names);
