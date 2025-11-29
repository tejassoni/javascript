/*
 * JavaScript Non-Primitive (Complex) Data Types
 * @author: Tejas Soni
 * @project: Non-Primitive Data Types Demonstration
 * @description: This code demonstrates non-primitive (complex) data types in JavaScript including Object, Array, and Function, with examples and console logs.
 * @js: JavaScript
 * @version: 1.0
 */

// None Primitive / Complex Data Types Examples

// Object
let person = { name: "Alice", age: 25 };
console.log("Object example: let person = { name: 'Alice', age: 25 };");
console.log("Type of person:", typeof person, ", Value:", person);
// output: Type of person: object , Value: { name: 'Alice', age: 25 }

// Different ways to define an Object

// 1. Object literal
let objLiteral = { a: 1, b: 2 };
console.log("Object literal:", objLiteral);
// output: Type of objLiteral: object , Value: { a: 1, b: 2 }

// 2. Using new Object()
let objConstructor = new Object();
objConstructor.a = 1;
objConstructor.b = 2;
console.log("Object using new Object():", objConstructor);
// output: Type of objConstructor: object , Value: { a: 1, b: 2 }

// 3. Using Object.create()
let proto = {
  greet: function () {
    return "Hello";
  },
};
let objCreate = Object.create(proto);
objCreate.a = 1;
console.log(
  "Object using Object.create():",
  objCreate,
  ", greet():",
  objCreate.greet()
);
// output: Type of objCreate: object , Value: { a: 1, __proto__: { greet: [Function: greet] } }

// Array
let numbers = [1, 2, 3, 4, 5];
console.log("Array example: let numbers = [1, 2, 3, 4, 5];");
console.log("Type of numbers:", typeof numbers, ", Value:", numbers);
// output: Type of numbers: object , Value: [ 1, 2, 3, 4, 5 ]

// Function
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(
  "Function example: function greet(name) { return 'Hello, ' + name + '!'; }"
);
console.log("Type of greet:", typeof greet, ", Value:", greet("Bob"));
// output: Type of greet: function , Value: Hello, Bob!

// Different ways to define an Array

// 2. Using new Array()
let arrConstructor = new Array(4, 5, 6);
console.log("Array using new Array():", arrConstructor);
// output: Type of arrConstructor: object , Value: [ 4, 5, 6 ]

// 3. Using Array.of()
let arrOf = Array.of(7, 8, 9);
console.log("Array using Array.of():", arrOf);
// output: Type of arrOf: object , Value: [ 7, 8, 9 ]

// 4. Using Array.from()
let arrFrom = Array.from("abc");
console.log("Array using Array.from():", arrFrom);
// output: Type of arrFrom: object , Value: [ 'a', 'b', 'c' ]
