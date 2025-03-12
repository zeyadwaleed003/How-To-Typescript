let variable: string | number;
// This means that the variable can be of type string OR number.

variable = 12;
variable = 'Zeyad';

let arr: (string | number)[] = [];
// This means that the variable "arr" can be of type number OR string OR both of them
arr.push(22);
arr.push('banananana');

console.log(arr);
// ERROR
// arr.push(true); Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

type UserInfo2 = {
  firstName: string;
  lastName: string;
  age: number;
};

type AccountDetails2 = {
  email: string;
  password: string;
};

// Can be of "UserInfo2" type OR "AccountDetails2" OR BOTH!
const Kamada: UserInfo2 | AccountDetails2 = {
  firstName: 'Kamada',
  lastName: 'Dada',
  age: 44,
  email: 'sadfdfa@gmail.com',
  password: 'ewafadfasdffd',
};
