/*
 * Operators in JavaScript
 * @author: Tejas Soni
 * @project: Operator Demonstration
 * @description: This code demonstrates various operators in JavaScript including arithmetic, assignment, comparison, logical, bitwise, ternary, typeof, instanceof, delete, and void operators.
 * @js: JavaScript
 * @version: 1.0
 */

// addition
let sum = 5 + 10;
console.log("Sum addition example: 5 + 10");
console.log("Result Sum addition :", sum);
// output: Result Sum addition : 15

// subtraction
let difference = 10 - 5;
console.log("Difference subtraction example: 10 - 5");
console.log("Result Difference subtraction :", difference);
// output: Result Difference subtraction : 5

// multiplication
let product = 5 * 10;
console.log("Product multiplication example: 5 * 10");
console.log("Result Product multiplication :", product);
// output: Result Product multiplication : 50

// division
let quotient = 10 / 5;
console.log("Quotient division example: 10 / 5");
console.log("Result Quotient division :", quotient);
// output: Result Quotient division : 2

// modulus
let remainder = 10 % 3;
console.log("Remainder modulus example: 10 % 3");
console.log("Result Remainder modulus :", remainder);
// output: Result Remainder modulus : 1

// exponentiation
let power = 2 ** 3;
console.log("Power exponentiation example: 2 ** 3");
console.log("Result Power exponentiation :", power);
// output: Result Power exponentiation : 8

// assignment
let assignedValue = 5;
console.log("Assignment example: let assignedValue = 5;");
console.log("Result Assignment :", assignedValue);
// output: Result Assignment : 5

// compound assignment
assignedValue += 5;
console.log("Compound Assignment example: assignedValue += 5;");
console.log("Result Compound Assignment :", assignedValue);
// output: Result Compound Assignment : 10

// increment
assignedValue++;
console.log("Increment example: assignedValue++;");
console.log("Result Increment :", assignedValue);
// output: Result Increment : 11

// decrement
assignedValue--;
console.log("Decrement example: assignedValue--;");
console.log("Result Decrement :", assignedValue);
// output: Result Decrement : 10

// comparison operators
let isEqual = 5 == "5";
console.log("Comparison example: 5 == '5'");
console.log("Result Comparison == :", isEqual);
// output: Result Comparison == : true

let isStrictEqual = 5 === "5";
console.log("Comparison example: 5 === '5'");
console.log("Result Comparison === :", isStrictEqual);
// output: Result Comparison === : false

let isNotEqual = 5 != 10;
console.log("Comparison example: 5 != 10");
console.log("Result Comparison != :", isNotEqual);
// output: Result Comparison != : true

let isGreater = 10 > 5;
console.log("Comparison example: 10 > 5");
console.log("Result Comparison > :", isGreater);
// output: Result Comparison > : true

let isLessOrEqual = 5 <= 10;
console.log("Comparison example: 5 <= 10");
console.log("Result Comparison <= :", isLessOrEqual);
// output: Result Comparison <= : true

// logical operators
let andResult = true && false;
console.log("Logical AND example: true && false");
console.log("Result Logical AND :", andResult);
// output: Result Logical AND : false

let orResult = true || false;
console.log("Logical OR example: true || false");
console.log("Result Logical OR :", orResult);
// output: Result Logical OR : true

let notResult = !true;
console.log("Logical NOT example: !true");
console.log("Result Logical NOT :", notResult);
// output: Result Logical NOT : false

// bitwise operators
let bitwiseAnd = 5 & 3;
console.log("Bitwise AND example: 5 & 3");
console.log("Result Bitwise AND :", bitwiseAnd);
// output: Result Bitwise AND : 1

let bitwiseOr = 5 | 3;
console.log("Bitwise OR example: 5 | 3");
console.log("Result Bitwise OR :", bitwiseOr);
// output: Result Bitwise OR : 7

let bitwiseXor = 5 ^ 3;
console.log("Bitwise XOR example: 5 ^ 3");
console.log("Result Bitwise XOR :", bitwiseXor);
// output: Result Bitwise XOR : 6

let bitwiseNot = ~5;
console.log("Bitwise NOT example: ~5");
console.log("Result Bitwise NOT :", bitwiseNot);
// output: Result Bitwise NOT : -6

let leftShift = 5 << 1;
console.log("Left Shift example: 5 << 1");
console.log("Result Left Shift :", leftShift);
// output: Result Left Shift : 10

let rightShift = 5 >> 1;
console.log("Right Shift example: 5 >> 1");
console.log("Result Right Shift :", rightShift);
// output: Result Right Shift : 2

// ternary operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Ternary example: (age >= 18) ? 'Yes' : 'No'");
console.log("Result Ternary :", canVote);
// output: Result Ternary : Yes

// typeof operator
let typeOfValue = typeof 123;
console.log("Typeof example: typeof 123");
console.log("Result Typeof :", typeOfValue);
// output: Result Typeof : number

// instanceof operator
let arr = [];
let isArray = arr instanceof Array;
console.log("Instanceof example: arr instanceof Array");
console.log("Result Instanceof :", isArray);
// output: Result Instanceof : true

// delete operator
let obj = { a: 1, b: 2 };
delete obj.a;
console.log("Delete example: delete obj.a");
console.log("Result Delete :", obj);
// output: Result Delete : { b: 2 }

// void operator
let voidResult = void 0;
console.log("Void example: void 0");
console.log("Result Void :", voidResult);
// output: Result Void : undefined
