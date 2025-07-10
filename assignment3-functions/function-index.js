// normal function without parameter
function testFunc()
{
  alert("i am testFunc");
}
testFunc(); // function calls

// normal function with parameter
function testFuncParams(name)
{
  alert(`i am testFuncParams ${ name }`)
}
testFuncParams('Radhe Mohan'); // function calls

// Immediately Invoked Function Expressions (IIFEs) without parameter
(function ()
{
  alert("I am IIFE function");
})();

// Immediately Invoked Function Expressions (IIFEs) with parameter
(function (name)
{
  alert("I am IIFE function " + name);
})('mukesh');

// arrow functions with parameter
const test = (name1) =>
{
  alert(`test ${ name1 }`)
}
test('champ'); // function calls

// arrow function without parameter
const test1 = (function ()
{
  alert(123);
});
test1(); // function calls

// arrow Immediately Invoked Function Expressions (IIFEs) without parameter
(() =>
{
  alert("IIFEs without parameter");
})();

// arrow Immediately Invoked Function Expressions (IIFEs) with parameter
((name) =>
{
  alert("IIFEs with parameter "+name);
})("tejas");



