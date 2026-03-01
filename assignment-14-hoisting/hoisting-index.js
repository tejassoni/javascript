/*
 * JavaScript Switch Demonstration
 * @author: Tejas Soni
 * @project: JavaScript Switch Demonstration
 * @description: This code demonstrates the concepts of switch statement in JavaScript. The switch statement is used to perform different actions based on different conditions. It evaluates an expression and matches the expression's value to a case label, then executes the associated block of code.
 * @js: JavaScript
 * @version: 1.0
 */

console.log(UserName); // output: undefined
var UserName = "Tejas Soni";
console.log(UserName); // output: Tejas Soni

// Explanation:
// In JavaScript, variable declarations using var are hoisted to the top of their scope. This means that the declaration of the variable UserName is moved to the top of the scope, but its assignment is not. Therefore, when we try to access UserName before its assignment, it returns undefined instead of throwing an error. After the assignment, UserName holds the value "Tejas Soni".

console.log(greet()); // output: Hello, World!
function greet() {
    return "Hello, World!";
}

// Explanation:
// Function declarations are also hoisted in JavaScript. This means that the entire function definition is moved to the top of the scope. Therefore, we can call the function greet() before its declaration, and it will work correctly, returning "Hello, World!" instead of throwing an error.

console.log(age); // output: ReferenceError: Cannot access 'age' before initialization
let age = 25;
console.log(age); // output: 25

// Explanation:
// Variables declared with let and const are also hoisted, but they are not initialized until their declaration is evaluated. This means that if we try to access the variable age before its declaration, it will throw a ReferenceError because it is in a "temporal dead zone" until the declaration is reached. After the declaration, age holds the value 25.

console.log(city); // output: ReferenceError: Cannot access 'city' before initialization
const city = "New York";
console.log(city); // output: New York

// Explanation:
// Similar to let, variables declared with const are also hoisted but not initialized until their declaration is evaluated. Therefore, trying to access city before its declaration will throw a ReferenceError. After the declaration, city holds the value "New York".

console.log(greetArrow()); // output: ReferenceError: Cannot access 'greetArrow' before initialization
const greetArrow = () => {
    return "Hello from Arrow Function!";
};
console.log(greetArrow()); // output: Hello from Arrow Function!

// Explanation:
// Arrow functions assigned to variables declared with const are also hoisted, but the variable itself is not initialized until the declaration is evaluated. Therefore, trying to access greetArrow before its declaration will throw a ReferenceError. After the declaration, greetArrow holds the arrow function, and we can call it successfully.

console.log(greetFunctionExpression()); // output: ReferenceError: Cannot access 'greetFunctionExpression' before initialization
const greetFunctionExpression = function() {
    return "Hello from Function Expression!";
};
console.log(greetFunctionExpression()); // output: Hello from Function Expression!

// Explanation:
// Similar to arrow functions, function expressions assigned to variables declared with const are also hoisted, but the variable itself is not initialized until the declaration is evaluated. Therefore, trying to access greetFunctionExpression before its declaration will throw a ReferenceError. After the declaration, greetFunctionExpression holds the function expression, and we can call it successfully.


console.log(num); // output: undefined
var num = 10;
console.log(num); // output: 10

// Explanation:
// The variable num is declared using var, which means it is hoisted to the top of its scope. However, its assignment is not hoisted. Therefore, when we try to access num before its assignment, it returns undefined. After the assignment, num holds the value 10.