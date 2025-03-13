// Public    -> Can Access the Property from inside OR outside the class
// Private   -> Can Access the Property from inside the class ONLY!
// Protected -> Can Access the Property from inside the class OR inside a class that extends the parent class

class Animal {
  private name: string;
  public age: number;
  protected species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  get getName(): string {
    return this.name;
  }

  get getAge(): number {
    return this.age;
  }

  get getSpecies(): string {
    return this.species;
  }

  set setName(value: string) {
    this.name = value;
  }

  set setAge(value: number) {
    this.age = value;
  }

  set setSpecies(value: string) {
    this.species = value;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, 'Canine');
  }

  public getInfo(): string {
    // Can't access the 'name' property because it is private -> Must use the Getter
    // Can access the 'age' property because it is public
    // Can access the 'species' property because it is protected and this class is a subclass of the 'Animal' class

    return `${this.getName} is a ${this.species} and is ${this.age} years old.`;
  }
}

const husky = new Animal('Husky', 3, 'dog');

// Changing the value of the "age" is totally fine because the variable is Public!
husky.age = 4;

// ERROR | Can't access a Private Property
husky.name = 'Hussssky'; // Property 'name' is private and only accessible within class 'Animal'.
console.log(husky.name); // Property 'name' is private and only accessible within class 'Animal'.

// I can't access the 'name' property, what should I do? -> Use Getters & Setters
husky.setName = 'Hussssskyyyyyyyy';
console.log(husky.getName);

// ERROR
husky.species = 'bladls'; // Property 'species' is protected and only accessible within class 'Animal' and its subclasses.

husky.setSpecies = 'Doggg';
console.log(husky.getSpecies);
