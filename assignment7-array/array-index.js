/*
* JavaScript Non-Primitive (Complex) Data Types
* @author: Tejas Soni
* @project: Non-Primitive Data Types Demonstration
* @description: This code demonstrates non-primitive (complex) data types in JavaScript including Object, Array, and Function, with examples and console logs.
* @js: JavaScript
* @version: 1.0
*/

var arrayExample = [1, 2, 3, 4, 5];
console.log("Array example: let arrayExample = [1,2,3,4,5];");
console.log("Type of arrayExample:", typeof arrayExample, ", Value:", arrayExample);
console.log("Accessing elements by index:"); // Accessing elements by index:
console.log("First element:", arrayExample[0]); // 1
console.log("Second element:", arrayExample[1]); // 2
console.log("Third element:", arrayExample[2]); // 3

// accessing elements using a loop
for (var i = 0; i < arrayExample.length; i++)
{
  console.log("Loop iteration:", i, "Element at index", i, "is", arrayExample[i]); // Element at index i is arrayExample[i]
}

// Accessing elements using forEach
arrayExample.forEach(function (element, index)
{
  console.log("forEach iteration:", index, "Element at index", index, "is", element); // Element at index index is element
});

// Demonstrating array methods
console.log("Array methods demonstration:");

// push method , add array element at the end
var arrPush = [5, 8, 9, 6, 3];
console.log("Original array arrPush :", arrPush);
arrPush.push(6);
console.log("After push(6):", arrPush); // After push(6): [5, 8, 9, 6, 3, 6]

// pop method, remove last element
var arrPop = [5, 8, 9, 6, 3];
console.log("Original array arrPop :", arrPop);
arrPop.pop();
console.log("After pop():", arrPop); // After pop(): [5, 8, 9, 6]


// shift method, remove first element
var arrShift = [1, 2, 3, 4, 5, 6];
console.log("Original array arrShift :", arrShift);
arrShift.shift();
console.log("After shift():", arrShift); // After shift(): [2, 3, 4, 5, 6]ss

// unshift method, add element at the beginning
var arrUnshift = [8, 7, 6, 5, 4, 3];
console.log("Original array arrUnshift :", arrUnshift);
arrUnshift.unshift(0);
console.log("After unshift(0):", arrUnshift); // After unshift(0): [0, 8, 7, 6, 5, 4, 3]

// splice method, remove 1 element at index 2
/*
  The splice() modifies original array by removing, replacing, or adding elements.
*/
var arrSplice = [2, 5, 6, 9, 7];
console.log("Original array arrSplice :", arrSplice);
arrSplice.splice(2, 1);
console.log("After splice(2, 1):", arrSplice); // After splice(2, 1): [2, 5, 9, 7]

// slice method , creates a shallow copy of a portion of an array
/*
  The slice() method returns a shallow copy of a portion of an array into a new array object, without modifying the original array.
*/
/*start (optional): Zero-based index at which to start extraction
Negative index counts back from the end of the array
If omitted, starts from index 0
end (optional): Zero-based index before which to end extraction
Negative index counts back from the end of the array
If omitted, extracts through the end of the array
*/
var arrSlice = [3,9,7,5,6,2];
console.log("Original array arrSlice :", arrSlice);
var slicedArray = arrSlice.slice(1, 3);
console.log("Sliced array (1, 3):", slicedArray); // Sliced array (1, 3): [9, 7]

var arrSlice1 = [3,9,7,5,6,2];
console.log("Original array arrSlice1 :", arrSlice1);
var slicedArray2 = arrSlice1.slice(1);
console.log("Sliced array (1):", slicedArray2); // Sliced array (1): [9, 7, 5, 6, 2]

// shift method
var arrShift = [95,65,26,78,96];
console.log("Original array arrShift :", arrShift);
arrShift.shift();
console.log("After shift(): arrShift", arrShift); // output : [65, 26, 78, 96]

// unshift method
var arrUnshift = [80,50,65,90,70,60,12];
console.log("Original array arrUnshift :", arrUnshift);
arrUnshift.unshift(0);
console.log("After unshift(0): arrUnshift", arrUnshift); // output : [0, 80, 50, 65, 90, 70, 60, 12]

// splice method
var arrSplice = [1,3,4,56,78,3];
console.log("Original array arrSplice :", arrSplice);
arrSplice.splice(2, 1);
console.log("After splice(2, 1):", arrSplice); // output : [1, 3, 56, 78, 3]

// slice method
var arrSlice = [4,5,6,1,2,8,9];
console.log("Original array arrSlice :", arrSlice);
var slicedArray = arrSlice.slice(1, 3);
console.log("Sliced array (1, 3):", slicedArray); // output : [5, 6]
