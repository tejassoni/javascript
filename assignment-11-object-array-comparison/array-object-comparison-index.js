/*
 * JavaScript Array and Object Comparison Demonstration
 * @author: Tejas Soni
 * @project: JavaScript Array and Object Comparison Demonstration
 * @description: This code demonstrates the concepts of array and object comparison in JavaScript, including their definitions, differences, and examples.
 * @js: JavaScript
 * @version: 1.0
 */

// what is array in javascript?
// An array is a special type of object used to store multiple values in a single variable.

const person1 = { name: "John", age: 30 };
const person2 = { name: "John", age: 30 };

console.log("Object Comparison Example:");
console.log("person1:", person1);
console.log("person2:", person2);
console.log("Are person1 and person2 equal?", person1 === person2); 
// output: Are person1 and person2 equal? false

console.log("Are person1 and person2's ages equal?", person1.age == person2.age);
// output: true
console.log("Are person1 and person2's names equal?", person1.name == person2.name);
// output: true

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

console.log("Array Comparison Example:");
console.log("array1:", array1);
console.log("array2:", array2);
console.log("Are array1 and array2 equal?", array1 === array2); 
// output: Are array1 and array2 equal? false

console.log("Are array1 and array2's first elements equal?", array1[0] == array2[0]);
// output: true
console.log("Are array1 and array2's second elements equal?", array1[1] == array2[1]);
// output: true
console.log("Are array1 and array2's third elements equal?", array1[2] == array2[2]);
// output: true

// Explanation:
// In JavaScript, both arrays and objects are reference types. 
// When comparing two different instances of arrays or objects, even if they contain the same data, 
// the comparison will return false because they reference different memory locations.

// To compare the contents of arrays or objects, you need to compare their properties or elements individually.

// Example of comparing object properties
function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

console.log("Comparing contents of person1 and person2:", areObjectsEqual(person1, person2)); 
// output: Comparing contents of person1 and person2: true

// Example of comparing array elements
function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log("Comparing contents of array1 and array2:", areArraysEqual(array1, array2)); 
// output: Comparing contents of array1 and array2: true