interface Human {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

const me: Human = {
  firstName: 'Zeyad',
  lastName: 'Waleed',
  age: 21,
  sayHello() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  },
};

me.sayHello();

interface Song {
  singer: string;
  songName: string;
  songInfo(singer: string, songName: string): string;
}

const s1: Song = {
  singer: 'Kalolo',
  songName: 'Imagine Not dragons',
  songInfo: (singer, songName) => {
    return `${songName} by ${singer}`;
  },
};

console.log(s1.songInfo(s1.singer, s1.songName));
