function filterArray<T>(arr: T[], condition: (element: T) => Boolean): T[] {
  return arr.filter((element) => condition(element));
}

const nums5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(nums5, (num) => !(num % 2));
console.log(evenNumbers);

const strings2 = ['banana', 'apple', 'mango', 'date'];
const shortWords = filterArray<string>(strings2, (word) => word.length < 6);
console.log(shortWords);

interface Fruit {
  name: string;
  color: string;
}

const fruits: Fruit[] = [
  { name: 'Banana', color: 'Yellow' },
  { name: 'Apple', color: 'Red' },
  { name: 'Mango', color: 'Orange' },
];

const yellowFruits = filterArray<Fruit>(
  fruits,
  (fruit) => fruit.color === 'Yellow'
);
console.log(yellowFruits);
