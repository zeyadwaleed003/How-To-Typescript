function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return {
    key: randomKey,
    value: obj[randomKey],
  };
}

const res1 = getRandomKeyValuePair<number>({ one: 1, two: 2, three: 3 });
console.log(res1);

const res2 = getRandomKeyValuePair<string>({ a: 'one', b: 'two', c: 'three' });
console.log(res2);
