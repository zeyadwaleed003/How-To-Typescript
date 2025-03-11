// Taking an object as a parameter in a function

// We annotate the parameter of the function which will be an object
function displayPersonInfo(person: {
  firstName: string;
  lastName: string;
  age: number;
}): void {
  console.log(
    `Name: ${person.firstName} ${person.lastName}. Age: ${person.age}`
  );
}

displayPersonInfo({
  firstName: 'Zeyad',
  lastName: 'Waleed',
  age: 21,
});

// Instead of annotating the whole object, we can make a Type Alias which will make the function more Readable

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

function displayPersonInfo1(person: Person): void {
  console.log(
    `Name: ${person.firstName} ${person.lastName}. Age: ${person.age}`
  );
}

displayPersonInfo1({
  firstName: 'Zeyad',
  lastName: 'Waleed',
  age: 21,
});

// The convention is to start the name of the type alias with Uppercase!
// Now the type alias "Person" is reusable (U can use it more than one time without the need to write the whole annovation again!)
