interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const c1: Computer = {
  name: 'i7',
  ram: 8,
  hdd: 100,
};

console.log(c1.name);

interface Movie {
  readonly name: string;
  rating: number;
  genra?: string;
}

const m1: Movie = {
  name: 'Intersteller',
  rating: 5,
};

console.log(m1);
