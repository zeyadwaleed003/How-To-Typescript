# Unions

In TypeScript, unions are used to declare a type that can have one of several possible types. Unions are useful when we want to allow a variable or parameter to accept multiple types.

The syntax for defining a union type in TypeScript uses the pipe symbol (|). For example, if we want to define a variable that can be either a number or a string, we would write:

```ts
let myVar: number | string;
```

This means that myVar can hold a value of type number or string.

We can also use unions with function parameters. For example, if we have a function that accepts either a string or an array of strings, we could define its parameter like this:

```ts
function foo(param: string | string[]) {
  // function body
}
```

Here, param can hold a value of type string or string[].

Unions can also be combined with other types in TypeScript, such as interfaces and classes. For example, we could define an interface that has a property that can be either a string or a number:

```ts
interface MyInterface {
  myProp: string | number;
}
```

Overall, unions in TypeScript provide a flexible way to work with variables and parameters that can have different types.

# Type Narrowing

In TypeScript, type narrowing is the process of refining a variable's type within a conditional block of code. This allows you to write more precise and type-safe code.

TypeScript provides several mechanisms for narrowing types, including:

1. Type guards: These are functions that return a boolean value indicating whether a value is of a certain type. For example, typeof can be used as a type guard to check if a value is a string or not.

2. The instanceof operator: This checks if an object is an instance of a particular class.

3. Discriminated unions: This is a pattern where a property is used to determine the specific subtype of an object.

4. Intersection types: If two types have overlapping properties, TypeScript will create a new type that includes only those properties that are common to both types.

Here's an example of using type narrowing with a type guard:

```ts
function printLength(strOrArray: string | string[]) {
  if (typeof strOrArray === 'string') {
    console.log(strOrArray.length); // OK
  } else {
    console.log(strOrArray.length); // OK
  }
}
```

In this example, we use the typeof operator as a type guard to narrow the type of strOrArray. Inside the if block, TypeScript knows that strOrArray is a string, so we can safely call the length property. Similarly, inside the else block, TypeScript knows that strOrArray is an array of strings, so we can also safely call the length property.

Type narrowing helps prevent runtime errors by ensuring that our code is always working with variables of the correct type.

# Literal Types

In TypeScript, literal types allow you to specify a value that can only be one specific literal value. This means that a variable with a literal type can only have one specific value and no other.

There are several types of literal types in TypeScript:

1. String Literal Types - This allows you to specify the exact value of a string that a variable can contain. For example:

```ts
let color: 'red' | 'blue' | 'green';
color = 'red'; // valid
color = 'yellow'; // invalid
```

2. Numeric Literal Types - This allows you to specify the exact value of a number that a variable can contain. For example:

```ts
let number: 1 | 2 | 3;
number = 1; // valid
number = 4; // invalid
```

3. Boolean Literal Types - This allows you to specify the exact value of a boolean that a variable can contain. For example:

```ts
let isTrue: true;
isTrue = true; // valid
isTrue = false; // invalid
```
