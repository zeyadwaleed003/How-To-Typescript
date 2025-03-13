interface MovieDetails {
  readonly name: string;
  rating: number;
  printMovieInfo(price: number): string | number;
}

interface MovieGenra extends MovieDetails {
  genra: string;
}

const m2: MovieGenra = {
  name: 'Intersteller',
  rating: 5,
  genra: 'Fiction',
  printMovieInfo(price: number): string | number {
    return `Movie name: ${this.name}, Price: ${price}, Ratings: ${this.rating}`;
  },
};

console.log(m2.printMovieInfo(230));
