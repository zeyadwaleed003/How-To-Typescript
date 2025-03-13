interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start() {
    console.log('Car is starting...');
  }

  stop() {
    console.log('Car is stopping');
  }
}

const c2 = new Car();
c2.start();
