/*
 * JavaScript Variable Definitions
 * @author: Tejas Soni
 * @project: Variable Definition Demonstration
 * @description: This code demonstrates different ways to define variables in JavaScript, valid variable names, and variable shadowing, with output samples.
 * @js: JavaScript
 * @version: 1.0
 */
// different ways to define variables
var userName = "John Doe";
var userAge30 = 30;
var $specialChar = "!";
var _underscoreVar = "This is a valid variable name";

console.log(userName); // output: John Doe
console.log(userAge30); // output: 30
console.log($specialChar); // output: !
console.log(_underscoreVar); // output: This is a valid variable name

// Shadow variable
var userName = "test";
function getUserName(name) {
  var userName = name; // shadow variable redeclared
}
getUserName("tejas");
// output: No output, demonstrates variable shadowing inside function
