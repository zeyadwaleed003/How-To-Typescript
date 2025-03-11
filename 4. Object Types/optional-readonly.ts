type User = {
  name: string;
  age?: number;
  readonly location: string;
};

// It's an optional thing to write the age of Alice or Not
const alice: User = {
  name: 'Alice',
  location: 'Russia',
};

// ERROR
alice.location = 'China'; // Cannot assign to 'location' because it is a read-only property.
