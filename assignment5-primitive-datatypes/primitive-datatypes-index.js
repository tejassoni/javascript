/*
* JavaScript Primitive Data Types
* @author: Tejas Soni
* @project: Primitive Data Types Demonstration
* @description: This code demonstrates all primitive data types in JavaScript including Number, String, Boolean, Null, Undefined, BigInt, and Symbol, with examples and console logs.
* @js: JavaScript
* @version: 1.0
*/

// JavaScript Primitive Data Types Examples
// Number
let num = 42;
console.log("Number example: let num = 42;");
console.log("Type of num:", typeof num, ", Value:", num);
// output: Type of num: number , Value: 42

let floatNum = 3.14;
console.log("Number (float) example: let floatNum = 3.14;");
console.log("Type of floatNum:", typeof floatNum, ", Value:", floatNum);
// output: Type of floatNum: number , Value: 3.14

// String
let str = "Hello, World!";
console.log("String example: let str = 'Hello, World!';");
console.log("Type of str:", typeof str, ", Value:", str);
// output: Type of str: string , Value: Hello, World!

// Boolean
let isAvailable = true;
console.log("Boolean example: let isAvailable = true;");
console.log("Type of isAvailable:", typeof isAvailable, ", Value:", isAvailable);
// output: Type of isAvailable: boolean , Value: true

// Null
let emptyValue = null;
console.log("Null example: let emptyValue = null;");
console.log("Type of emptyValue:", typeof emptyValue, ", Value:", emptyValue);
// output: Type of emptyValue: object , Value: null

// Undefined
let notAssigned;
console.log("Undefined example: let notAssigned;");
console.log("Type of notAssigned:", typeof notAssigned, ", Value:", notAssigned);
// output: Type of notAssigned: undefined , Value: undefined

// BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt example: let bigNumber = 1234567890123456789012345678901234567890n;");
console.log("Type of bigNumber:", typeof bigNumber, ", Value:", bigNumber);
// output: Type of bigNumber: bigint , Value: 1234567890123456789012345678901234567890n

// Symbol
let uniqueId = Symbol('id');
console.log("Symbol example: let uniqueId = Symbol('id');");
console.log("Type of uniqueId:", typeof uniqueId, ", Value:", uniqueId.toString());
// output: Type of uniqueId: symbol , Value: Symbol(id)

// Mixing numbers and strings examples

let mix1 = 3 + '3';
console.log("3 + '3' =", mix1, "| Type:", typeof mix1); // '33', string
// output: Type of mix1: string , Value: 33

let mix2 = 3 - '3';
console.log("3 - '3' =", mix2, "| Type:", typeof mix2); // 0, number
// output: Type of mix2: number , Value: 0

let mix3 = 3 * '3';
console.log("3 * '3' =", mix3, "| Type:", typeof mix3); // 9, number
// output: Type of mix3: number , Value: 9

let mix4 = 3 / '3';
console.log("3 / '3' =", mix4, "| Type:", typeof mix4); // 1, number
// output: Type of mix4: number , Value: 1

let mix5 = 'hi' - 'i';
console.log("'hi' - 'i' =", mix5, "| Type:", typeof mix5); // NaN, number
// output: Type of mix5: number , Value: NaN
