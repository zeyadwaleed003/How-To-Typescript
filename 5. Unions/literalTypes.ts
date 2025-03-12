let color1: 'red' = 'red';
// Here I said that color1 can only be of type 'red'

// ERROR
color1 = 'blue'; // Type '"blue"' is not assignable to type '"red"'.

let color2: 'red' | 'blue' | 'green';
color2 = 'red';
color2 = 'green';

// ERROR
color2 = 'yellow'; // Type '"yellow"' is not assignable to type '"red" | "blue" | "green"'.
