// Regular class but with annotations
class Person2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const mohamed = new Person2('Mohamed', 21);

// Using readonly
class Person3 {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const sameh = new Person3('Sameh', 33);

// ERROR
// sameh.name = 'madoda'; Cannot assign to 'name' because it is a read-only property.
