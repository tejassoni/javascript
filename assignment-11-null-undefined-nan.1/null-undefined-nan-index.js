/*
 * JavaScript Undefined , Null , and NaN Demonstration
 * @author: Tejas Soni
 * @project: JavaScript Undefined , Null , and NaN  Demonstration
 * @description: This code demonstrates the concepts of undefined, null, and NaN in JavaScript, including their definitions, differences, and examples.
 * @js: JavaScript
 * @version: 1.0
 */

// what is undefined in javascript?
//Default value of un initialized variable is undefined.
// you can assign undefined to a variable explicitly but it is not recommended.

// Creating a variable with undefined value
let undefVar;
console.log("Undefined example: let undefVar;");
console.log("Type of undefVar:", typeof undefVar, ", Value:", undefVar);
// output: Type of undefVar: undefined , Value: undefined

let explicitUndef = undefined;
console.log("Explicit undefined example: let explicitUndef = undefined;");
console.log(
  "Type of explicitUndef:",
  typeof explicitUndef,
  ", Value:",
  explicitUndef
);
// output: Type of explicitUndef: undefined , Value: undefined

// what is null in javascript?
// null is not a default value of un initialized variable.
// you can assign null value to a variable if you want to reset or clear its value.

// Creating a variable with null value
let nullVar = null;
console.log("Null example: let nullVar = null;");
console.log("Type of nullVar:", typeof nullVar, ", Value:", nullVar);
// output: Type of nullVar: object , Value: null

// object property with null value
let objWithNull = {};
console.log("Object with null property example: let objWithNull = {};");
console.log("Type of objWithNull:", typeof objWithNull);
// output: Type of objWithNull object , Value: null

// what is NaN in javascript?
// NaN stands for "Not-a-Number", It is a special numeric value,  represents an invalid number result.

// Creating a variable with NaN value
let nanVar = NaN;
console.log("NaN example: let nanVar = NaN;");
console.log("Type of nanVar:", typeof nanVar, ", Value:", nanVar);
// output: Type of nanVar: number , Value: NaN

let check = 3 * "hello";
console.log("Example of NaN from invalid operation: let check = 3 * 'hello';");
console.log("Type of check:", typeof check, ", Value:", check);
// output: Type of check: number , Value: NaN
