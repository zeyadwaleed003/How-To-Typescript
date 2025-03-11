type UserInfo = {
  firstName: string;
  lastName: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User1 = UserInfo & AccountDetails;
// This means that whenever we want to use the type alias "User1" we need to specify the fields
// Of the two type aliases "UserInfo" & "AccountDetails"

const zeyad: User1 = {
  firstName: 'Zeyad',
  lastName: 'Waleed',
  age: 21,
  email: 'eawnkfna@gmail.com',
  password: 'edfamdasfmdsa',
};

console.log(zeyad);
