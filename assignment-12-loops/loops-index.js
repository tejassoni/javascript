/*
 * JavaScript Loops Demonstration
 * @author: Tejas Soni
 * @project: JavaScript Loops Demonstration
 * @description: This code demonstrates the concepts of various loops in JavaScript including for, while, do-while, for...of, for...in, nested loops, break, continue, and labelled statements.
 * @js: JavaScript
 * @version: 1.0
 */

// for loop example
// iterates a block of code a specified number of times, it consists of initialization, condition, and increment/decrement
for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration:", i);
}
// output: For Loop Iteration: 0
// output: For Loop Iteration: 1
// output: For Loop Iteration: 2
// output: For Loop Iteration: 3
// output: For Loop Iteration: 4

// while loop example
// continues to execute as long as the condition is true, it checks the condition before executing the block of code
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration:", j);
    j++;
}
// output: While Loop Iteration: 0
// output: While Loop Iteration: 1
// output: While Loop Iteration: 2
// output: While Loop Iteration: 3
// output: While Loop Iteration: 4

// do-while loop example
// executes the block of code once before checking the condition, it guarantees at least one execution
let k = 0;
do {
    console.log("Do-While Loop Iteration:", k);
    k++;
} while (k < 5);
// output: Do-While Loop Iteration: 0
// output: Do-While Loop Iteration: 1
// output: Do-While Loop Iteration: 2
// output: Do-While Loop Iteration: 3
// output: Do-While Loop Iteration: 4

// for...of loop example
// for iterating over array values , it returns the values of the array, it works with array, string, map, set, etc.
const arrayData = [10, 20, 30, 40, 50];
for (const value of arrayData) {
    console.log("For...Of Loop Value:", value);
}
// output: For...Of Loop Value: 10
// output: For...Of Loop Value: 20
// output: For...Of Loop Value: 30
// output: For...Of Loop Value: 40
// output: For...Of Loop Value: 50

// for...in loop example
// for iterating over object properties , it returns the keys of the object, it wors with objects
const objectData = { a: 1, b: 2, c: 3 };
for (const key in objectData) {
    console.log("For...In Loop Key:", key, "Value:", objectData[key]);
}
// output: For...In Loop Key: a Value: 1
// output: For...In Loop Key: b Value: 2
// output: For...In Loop Key: c Value: 3

// Nested loop example
// a loop inside another loop, useful for multi-dimensional data structures
for (let m = 1; m <= 3; m++) {
    for (let n = 1; n <= 2; n++) {
        console.log("Nested Loop - Outer:", m, "Inner:", n);
    }
}
// output: Nested Loop - Outer: 1 Inner: 1
// output: Nested Loop - Outer: 1 Inner: 2
// output: Nested Loop - Outer: 2 Inner: 1
// output: Nested Loop - Outer: 2 Inner: 2
// output: Nested Loop - Outer: 3 Inner: 1
// output: Nested Loop - Outer: 3 Inner: 2

// break statement example
// used to exit a loop prematurely when a certain condition is met
for (let p = 0; p < 10; p++) {
    if (p === 5) {
        console.log("Break at:", p);
        break;
    }
    console.log("Break Loop Iteration:", p);
}
// output: Break Loop Iteration: 0
// output: Break Loop Iteration: 1
// output: Break Loop Iteration: 2
// output: Break Loop Iteration: 3
// output: Break Loop Iteration: 4
// output: Break at: 5

// continue statement example
// used to skip the current iteration and move to the next iteration of the loop
for (let q = 0; q < 10; q++) {
    if (q % 2 === 0) {
        continue; // skip even numbers
    }
    console.log("Continue Loop Odd Number:", q);
}
// output: Continue Loop Odd Number: 1
// output: Continue Loop Odd Number: 3
// output: Continue Loop Odd Number: 5
// output: Continue Loop Odd Number: 7
// output: Continue Loop Odd Number: 9

// labelled statement example
// allows you to name a loop and use break or continue with that label to control nested loops
outerLoop: for (let r = 1; r <= 3; r++) {
    innerLoop: for (let s = 1; s <= 3; s++) {
        if (r === 2 && s === 2) {
            console.log("Breaking out of outer loop at:", r, s);
            //  break outerLoop; // breaks out of the outer loop
            continue innerLoop; // continues with the next iteration of the inner loop
        }
        console.log("Labelled Loop - Outer:", r, "Inner:", s);
    }
}
// continue output from above
// output: Labelled Loop - Outer: 1 Inner: 1
// output: Labelled Loop - Outer: 1 Inner: 2
// output: Labelled Loop - Outer: 1 Inner: 3

// breaking out of outer loop at: 2 2
// output: Labelled Loop - Outer: 2 Inner: 3
// output: Labelled Loop - Outer: 3 Inner: 1
// output: Labelled Loop - Outer: 3 Inner: 2
// output: Labelled Loop - Outer: 3 Inner: 3

