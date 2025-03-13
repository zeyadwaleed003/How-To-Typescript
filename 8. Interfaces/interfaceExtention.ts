// Original Interface
interface Car {
  brand: string;
  start(): void;
}

// Declaration Merging (interface extension)
interface Car {
  model: string;
  stop(): void;
}

const c3: Car = {
  brand: 'BMW',
  model: 'm4',
  start() {
    console.log('Car is starting...');
  },
  stop() {
    console.log('Car is stopping!');
  },
};

c3.start();
