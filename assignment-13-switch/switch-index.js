/*
 * JavaScript Switch Demonstration
 * @author: Tejas Soni
 * @project: JavaScript Switch Demonstration
 * @description: This code demonstrates the concepts of switch statement in JavaScript. The switch statement is used to perform different actions based on different conditions. It evaluates an expression and matches the expression's value to a case label, then executes the associated block of code.
 * @js: JavaScript
 * @version: 1.0
 */

// switch statement example
// switch statement is used to perform different actions based on different conditions, it evaluates an expression and matches the expression's value to a case label, then executes the associated block of code
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;  
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
// output: Wednesday