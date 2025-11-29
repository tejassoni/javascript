/*
* JavaScript Functions
* @author: Tejas Soni
* @project: Function Demonstration
* @description: This code demonstrates different ways to define and use functions in JavaScript, including normal functions, functions with parameters, IIFEs, and arrow functions, with output samples.
* @js: JavaScript
* @version: 1.0
*/

// normal function without parameter
function testFunc()
{
  alert("i am testFunc");
}
testFunc(); // function calls
// output: alert("i am testFunc")

// normal function with parameter
function testFuncParams(name)
{
  alert(`i am testFuncParams ${ name }`)
}
testFuncParams('Radhe Mohan'); // function calls
// output: alert("i am testFuncParams Radhe Mohan")

// Immediately Invoked Function Expressions (IIFEs) without parameter
(function ()
{
  alert("I am IIFE function");
})();
// output: alert("I am IIFE function")

// Immediately Invoked Function Expressions (IIFEs) with parameter
(function (name)
{
  alert("I am IIFE function " + name);
})('mukesh');
// output: alert("I am IIFE function mukesh")

// arrow functions with parameter
const test = (name1) =>
{
  alert(`test ${ name1 }`)
}
test('champ'); // function calls
// output: alert("test champ")

// arrow function without parameter
const test1 = (function ()
{
  alert(123);
});
test1(); // function calls
// output: alert(123)

// arrow Immediately Invoked Function Expressions (IIFEs) without parameter
(() =>
{
  alert("IIFEs without parameter");
})();
// output: alert("IIFEs without parameter")

// arrow Immediately Invoked Function Expressions (IIFEs) with parameter
((name) =>
{
  alert("IIFEs with parameter "+name);
})("tejas");
// output: alert("IIFEs with parameter tejas")



