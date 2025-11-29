/*
 * JavaScript Non-Primitive (Complex) Data Types
 * @author: Tejas Soni
 * @project: Non-Primitive Data Types Demonstration
 * @description: Demonstrates JavaScript non-primitive (complex) data types with emphasis on Arrays.
 * Contains examples for iteration (for, for...of, for...in, forEach), mutation (push, pop, shift, unshift, splice),
 * accessors and creators (slice, concat, Array.from, Array.of, Array.isArray), functional helpers (map, filter, reduce, find, findIndex, every, some, flat/flatMap),
 * mutation utilities (sort, reverse, fill, copyWithin), iterators (entries, keys, values), and other common array APIs.
 * Examples use ES5 and ES6+ syntax where appropriate and are intended for learning/demonstration in browser or Node.js consoles.
 * @js: JavaScript
 * @version: 1.0
 */

// What is an Array?
// An array is a special variable, which can hold more than one value at a time.
// It is a data structure that can store a collection of items (elements) under a single variable name.
// Each item in an array has a numeric index, starting from 0 for the first element, 1 for the second element, and so on.
var arrayExample = [1, 2, 3, 4, 5];
console.log("Array example: let arrayExample = [1,2,3,4,5];");
console.log(
  "Type of arrayExample:",
  typeof arrayExample,
  ", Value:",
  arrayExample
);
console.log("Accessing elements by index:"); // Accessing elements by index:
console.log("First element:", arrayExample[0]); // 1
console.log("Second element:", arrayExample[1]); // 2
console.log("Third element:", arrayExample[2]); // 3

// accessing elements using a loop
for (var i = 0; i < arrayExample.length; i++) {
  console.log(
    "Loop iteration:",
    i,
    "Element at index",
    i,
    "is",
    arrayExample[i]
  ); // Element at index i is arrayExample[i]
}
// output : Element at index 0 is 1
// output : Element at index 1 is 2
// output : Element at index 2 is 3
// output : Element at index 3 is 4
// output : Element at index 4 is 5

// Accessing elements using forEach
arrayExample.forEach(function (element, index) {
  console.log(
    "forEach iteration:",
    index,
    "Element at index",
    index,
    "is",
    element
  ); // Element at index index is element
});
// output : Element at index 0 is 1
// output : Element at index 1 is 2
// output : Element at index 2 is 3
// output : Element at index 3 is 4
// output : Element at index 4 is 5

// for...of (iteration construct) — iterate values
// The for...of statement creates a loop iterating over iterable objects, including Arrays, Strings, Maps, NodeLists, and more.
for (var value of arrayExample) {
  console.log("for...of iteration: Element value is", value); // Element value is value
}
// output : Element value is 1
// output : Element value is 2
// output : Element value is 3
// output : Element value is 4
// output : Element value is 5

// for...in (iteration construct) — iterate keys
// The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
for (var index in arrayExample) {
  console.log(
    "for...in iteration: Element at index",
    index,
    "is",
    arrayExample[index]
  ); // Element at index index is arrayExample[index]
}
// output : Element at index 0 is 1
// output : Element at index 1 is 2
// output : Element at index 2 is 3
// output : Element at index 3 is 4
// output : Element at index 4 is 5

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
console.log("After shift():", arrShift); // After shift(): [2, 3, 4, 5, 6]

// shift method
// removes the first element from an array and returns that removed element. This method changes the length of the array.
var arrShift = [95, 65, 26, 78, 96];
console.log("Original array arrShift :", arrShift);
arrShift.shift();
console.log("After shift(): arrShift", arrShift); // output : [65, 26, 78, 96]

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

// splice method
var arrSplice = [1, 3, 4, 56, 78, 3];
console.log("Original array arrSplice :", arrSplice);
arrSplice.splice(2, 1);
console.log("After splice(2, 1):", arrSplice); // output : [1, 3, 56, 78, 3]

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
var arrSlice = [3, 9, 7, 5, 6, 2];
console.log("Original array arrSlice :", arrSlice);
var slicedArray = arrSlice.slice(1, 3);
console.log("Sliced array (1, 3):", slicedArray); // Sliced array (1, 3): [9, 7]

var arrSlice1 = [3, 9, 7, 5, 6, 2];
console.log("Original array arrSlice1 :", arrSlice1);
var slicedArray2 = arrSlice1.slice(1);
console.log("Sliced array (1):", slicedArray2); // Sliced array (1): [9, 7, 5, 6, 2]

var arrSlice = [4, 5, 6, 1, 2, 8, 9];
console.log("Original array arrSlice :", arrSlice);
var slicedArray = arrSlice.slice(1, 3);
console.log("Sliced array (1, 3):", slicedArray); // output : [5, 6]

// array concat method
// concat method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
var arrConcat1 = [1, 2, 3];
var arrConcat2 = [4, 5, 6];
console.log(
  "Original arrays arrConcat1 and arrConcat2 :",
  arrConcat1,
  arrConcat2
);
var concatenatedArray = arrConcat1.concat(arrConcat2);
console.log("After concat:", concatenatedArray); // output : [1, 2, 3, 4, 5, 6]

// array indexOf method
// indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
var arrIndexOf = [10, 20, 30, 40, 50];
console.log("Original array arrIndexOf :", arrIndexOf);
var index = arrIndexOf.indexOf(30);
console.log("Index of 30:", index); // output : 2

var notFoundIndex = arrIndexOf.indexOf(60);
console.log("Index of 60 (not found):", notFoundIndex); // output : -1

// array lastIndexOf method
// lastIndexOf method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
var arrLastIndexOf = [10, 20, 30, 40, 50, 30];
console.log("Original array arrLastIndexOf :", arrLastIndexOf);
var lastIndex = arrLastIndexOf.lastIndexOf(30);
console.log("Last index of 30:", lastIndex); // output : 5

var notFoundLastIndex = arrLastIndexOf.lastIndexOf(60);
console.log("Last index of 60 (not found):", notFoundLastIndex); // output : -1

// array includes method
// includes method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
var arrIncludes = [1, 2, 3, 4, 5];
console.log("Original array arrIncludes :", arrIncludes);
var hasThree = arrIncludes.includes(3);
console.log("Array includes 3:", hasThree); // output : true

var hasSix = arrIncludes.includes(6);
console.log("Array includes 6:", hasSix); // output : false

// array join method
// join method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
var arrJoin = ["Hello", "world", "from", "JavaScript"];
console.log("Original array arrJoin :", arrJoin);
var joinedString = arrJoin.join(" ");
console.log("Joined string:", joinedString); // output : "Hello world from JavaScript"

var arrJoin2 = ["2024", "06", "15"];
console.log("Original array arrJoin2 :", arrJoin2);
var joinedDate = arrJoin2.join("-");
console.log("Joined date string:", joinedDate); // output : "2024-06-15"

// array map method
// map method creates a new array populated with the results of calling a provided function on every element in the calling array.
var arrMap = [1, 2, 3, 4, 5];
console.log("Original array arrMap :", arrMap);
var mappedArray = arrMap.map(function (element) {
  return element * 2;
});
console.log("Mapped array (elements multiplied by 2):", mappedArray); // output : [2, 4, 6, 8, 10]

var arrMap2 = [10, 20, 30];
console.log("Original array arrMap2 :", arrMap2);
var mappedArray2 = arrMap2.map(function (element) {
  return element + 5;
});
console.log("Mapped array (elements plus 5):", mappedArray2); // output : [15, 25, 35]

// array filter method
// filter method creates a new array with all elements that pass the test implemented by the provided function.
var arrFilter = [1, 2, 3, 4, 5, 6];
console.log("Original array arrFilter :", arrFilter);
var filteredArray = arrFilter.filter(function (element) {
  return element % 2 === 0; // keep even numbers
});
console.log("Filtered array (even numbers):", filteredArray); // output : [2, 4, 6]

// odd numbers filter
var arrFilter1 = [1, 2, 3, 4, 5, 6];
console.log("Original array arrFilter1 :", arrFilter1);
var filteredArray1 = arrFilter1.filter(function (element) {
  return element % 2 !== 0; // keep odd numbers
});
console.log("Filtered array (odd numbers):", filteredArray1); // output : [1, 3, 5]

var arrFilter2 = [10, 15, 20, 25, 30];
console.log("Original array arrFilter2 :", arrFilter2);
var filteredArray2 = arrFilter2.filter(function (element) {
  return element > 20; // keep numbers greater than 20
});
console.log("Filtered array (numbers > 20):", filteredArray2); // output : [25, 30]

// array reduce method
// reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
var arrReduce = [1, 2, 3, 4, 5];
console.log("Original array arrReduce :", arrReduce);
var sum = arrReduce.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log("Sum of array elements using reduce():", sum); // output : 15

var arrReduce2 = [10, 20, 30];
console.log("Original array arrReduce2 :", arrReduce2);
var product = arrReduce2.reduce(function (accumulator, currentValue) {
  return accumulator * currentValue;
}, 1);
console.log("Product of array elements using reduce():", product); // output : 6000

// array find / findIndex — find first matching element or its index
// find method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
var arrFind = [5, 12, 8, 130, 44];
console.log("Original array arrFind :", arrFind);
var foundElement = arrFind.find(function (element) {
  return element > 10;
});
console.log("First element greater than 10 using find():", foundElement); // output : 12

var arrFind2 = [1, 3, 7, 9, 11];
console.log("Original array arrFind2 :", arrFind2);
var foundElement2 = arrFind2.find(function (element) {
  return element > 10;
});
console.log("First element greater than 10 using find():", foundElement2); // output : 11

// findIndex method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
var arrFindIndex = [5, 12, 8, 130, 44];
console.log("Original array arrFindIndex :", arrFindIndex);
var foundIndex = arrFindIndex.findIndex(function (element) {
  return element > 10;
});
console.log(
  "Index of first element greater than 10 using findIndex():",
  foundIndex
); // output : 1

var arrFindIndex2 = [1, 3, 7, 9, 11];
console.log("Original array arrFindIndex2 :", arrFindIndex2);
var foundIndex2 = arrFindIndex2.findIndex(function (element) {
  return element > 10;
});
console.log(
  "Index of first element greater than 10 using findIndex():",
  foundIndex2
); // output : 4

// every / some — boolean tests over items
// every method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
var arrEvery = [2, 4, 6, 8, 10];
console.log("Original array arrEvery :", arrEvery);
var allEven = arrEvery.every(function (element) {
  return element % 2 === 0; // check if element is even
});
console.log("All elements are even using every():", allEven);

var arrEvery2 = [2, 3, 6, 8, 10];
console.log("Original array arrEvery2 :", arrEvery2);
var allEven2 = arrEvery2.every(function (element) {
  return element % 2 === 0; // check if element is even
});
console.log("All elements are even using every():", allEven2); // output : false

// some method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
var arrSome = [1, 3, 5, 6, 7];
console.log("Original array arrSome :", arrSome);
var hasEven = arrSome.some(function (element) {
  return element % 2 === 0; // check if element is even
});
console.log("At least one even element using some():", hasEven);

// second some example
var arrSome2 = [1, 3, 5, 7, 9];
console.log("Original array arrSome2 :", arrSome2);
var hasEven2 = arrSome2.some(function (element) {
  return element % 2 === 0; // check if element is even
});
console.log("At least one even element using some():", hasEven2); // output : false

// sort — sort in-place
// sort method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings.
var arrSort = [5, 2, 9, 1, 5, 6];
console.log("Original array arrSort :", arrSort);
arrSort.sort();
console.log("Sorted array arrSort :", arrSort); // output : [1, 2, 5, 5, 6, 9]

var arrSort2 = ["banana", "apple", "cherry", "date"];
console.log("Original array arrSort2 :", arrSort2);
arrSort2.sort();
console.log("Sorted array arrSort2 :", arrSort2); // output : ['apple', 'banana', 'cherry', 'date']

// reverse — reverse in-place
// reverse method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
var arrReverse = [1, 2, 3, 4, 5];
console.log("Original array arrReverse :", arrReverse);
arrReverse.reverse();
console.log("Reversed array arrReverse :", arrReverse); // output : [5, 4, 3, 2, 1]

var arrReverse2 = ["one", "two", "three", "four"];
console.log("Original array arrReverse2 :", arrReverse2);
arrReverse2.reverse();
console.log("Reversed array arrReverse2 :", arrReverse2); // output : ['four', 'three', 'two', 'one']

// fill — fill with value
// fill method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
var arrFill = [1, 2, 3, 4, 5];
console.log("Original array arrFill :", arrFill);
arrFill.fill(0);
console.log("Filled array arrFill :", arrFill); // output : [0, 0, 0, 0, 0]

var arrFill2 = ["a", "b", "c", "d"];
console.log("Original array arrFill2 :", arrFill2);
arrFill2.fill("z");
console.log("Filled array arrFill2 :", arrFill2); // output : ['z', 'z', 'z', 'z']

//copyWithin — copy a sequence inside array
// copyWithin method shallow copies part of an array to another location in the same array and returns it, without modifying its length.
var arrCopyWithin = [1, 2, 3, 4, 5];
console.log("Original array arrCopyWithin :", arrCopyWithin);
arrCopyWithin.copyWithin(0, 3);
console.log("Modified array arrCopyWithin :", arrCopyWithin); // output : [4, 5, 3, 4, 5]

var arrCopyWithin2 = ["a", "b", "c", "d", "e"];
console.log("Original array arrCopyWithin2 :", arrCopyWithin2);
arrCopyWithin2.copyWithin(1, 2, 4);
console.log("Modified array arrCopyWithin2 :", arrCopyWithin2); // output : ['a', 'c', 'd', 'd', 'e']

// flat / flatMap — flatten nested arrays (map+flatten)
// flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
var arrFlat = [1, 2, [3, 4], [5, 6]];
console.log("Original array arrFlat :", arrFlat);
var flattenedArray = arrFlat.flat();
console.log("Flattened array arrFlat :", flattenedArray); // output : [1, 2, 3, 4, 5, 6]

var arrFlat2 = [1, 2, [3, [4, 5]]];
console.log("Original array arrFlat2 :", arrFlat2);
var flattenedArray2 = arrFlat2.flat(2);
console.log("Flattened array arrFlat2 :", flattenedArray2); // output : [1, 2, 3, 4, 5]

// flatMap method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1.
var arrFlatMap = [1, 2, 3];
console.log("Original array arrFlatMap :", arrFlatMap);
var flatMappedArray = arrFlatMap.flatMap(function (element) {
  return [element, element * 2];
});
console.log("FlatMapped array arrFlatMap :", flatMappedArray); // output : [1, 2, 2, 4, 3, 6]

var arrFlatMap2 = ["a", "b", "c"];
console.log("Original array arrFlatMap2 :", arrFlatMap2);
var flatMappedArray2 = arrFlatMap2.flatMap(function (element) {
  return [element.toUpperCase(), element + element];
});
console.log("FlatMapped array arrFlatMap2 :", flatMappedArray2); // output : ['A', 'aa', 'B', 'bb', 'C', 'cc']

// entries / keys / values — iterators for [index,value], keys, or values
// entries method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
var arrEntries = ["a", "b", "c"];
console.log("Original array arrEntries :", arrEntries);
var iterator = arrEntries.entries();
for (var pair of iterator) {
  console.log("Index and value using entries():", pair); // output : [index, value]
}
// output : [0, 'a']
// output : [1, 'b']
// output : [2, 'c']

// keys method returns a new Array Iterator that contains the keys for each index in the array.
var arrKeys = ["x", "y", "z"];
console.log("Original array arrKeys :", arrKeys);
var keysIterator = arrKeys.keys();
for (var key of keysIterator) {
  console.log("Index using keys():", key); // output : index
}
// output : 0
// output : 1
// output : 2

// values method returns a new Array Iterator object that contains the values for each index in the array.
var arrValues = [10, 20, 30];
console.log("Original array arrValues :", arrValues);
var valuesIterator = arrValues.values();
for (var value of valuesIterator) {
  console.log("Value using values():", value); // output : value
}
// output : 10
// output : 20
// output : 30

//Array.from / Array.of / Array.isArray — static helpers
// Array.from method creates a new, shallow-copied Array instance from an array-like or iterable object.
var str = "hello";
console.log("Original string str :", str);
var arrFrom = Array.from(str);
console.log("Array created from string using Array.from():", arrFrom); // output : ['h', 'e', 'l', 'l', 'o']

var set = [1, 2, 3];
console.log("Original Set set :", set);
var arrFromSet = Array.from(set);
console.log("Array created from Set using Array.from():", arrFromSet); // output : [1, 2, 3]

// Array.of method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
var arrOf = Array.of(1, 2, 3, 4, 5);
console.log("Array created using Array.of():", arrOf); // output : [1, 2, 3, 4, 5]

var arrOfStrings = Array.of("a", "b", "c");
console.log("Array created using Array.of() with strings:", arrOfStrings); // output : ['a', 'b', 'c']

// Array.isArray method determines whether the passed value is an Array.
var arrCheck = [1, 2, 3];
console.log("Original array arrCheck :", arrCheck);
var isArray = Array.isArray(arrCheck);
console.log("Is arrCheck an array using Array.isArray():", isArray); // output : true

var notArray = { a: 1, b: 2 };
console.log("Original object notArray :", notArray);
var isNotArray = Array.isArray(notArray);
console.log("Is notArray an array using Array.isArray():", isNotArray); // output : false
