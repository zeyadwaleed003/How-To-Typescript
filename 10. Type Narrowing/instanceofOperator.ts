class Dog1 {
  Bark(): void {
    console.log('Woff Woff');
  }
}

class Cat1 {
  Meow(): void {
    console.log('Meow Meow');
  }
}

function animalSound(animal: Cat1 | Dog1): void {
  if (animal instanceof Cat1) animal.Meow();
  else animal.Bark();
}

const myDog = new Dog1();
const myCat = new Cat1();

animalSound(myCat);
animalSound(myDog);
