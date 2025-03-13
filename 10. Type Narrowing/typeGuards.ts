type myType = string | number;

function func(val: myType): void {
  if (typeof val === 'string') console.log(val.toUpperCase());
  else console.log(val.toFixed(2));
}

func('Zeyad');
func(2);
