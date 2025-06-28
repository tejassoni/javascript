// var , let and const defined with same variable names to check if it is allowed in javascript or not
var test1; // can not define same test1 variable as let , var or const
let test1; // can not define same test1 variable as let , var or const
const test1 = 0; // can not define same test1 variable as let , var or const
console.log(test1); // Uncaught SyntaxError: Identifier 'test1' has already been declared

// var , let and const defined and check if it is updated or re declare within scope

var test2; // initialize varilable without value assigned 
let test3; // initialize varilable without value assigned

console.log("var test2 : ", test2);       // Output: "undefined"
console.log("let test3 : ", test3);       // Output: "undefined"
console.log("var test2 typeof : ", typeof test2); // Output: undefined
console.log("let test3 typeof : ", typeof test3); // Output: undefined

if (test3 === test2) // check var and let strict equals types
{
  console.log("true , test3 === test2"); // Output: true , test3 == test3
} else
{
  console.log("false , test3 === test2");
}

if (test3 == test2) // check var and let loose equals types
{
  console.log("true , test3 == test2"); // Output: true , test3 == test3
} else
{
  console.log("false , test3 == test2");
}

var test2 = "string1";
console.log('var test2 : ', test2) // Output: "string1"

test3 = "string3";
test2 = "string4";
console.log('let test3 : ', test3); // Output: "string3"
console.log('var test2 : ', test2); // Output: "string2"

var testA;

function changeName(name)
{
  var testA;
  let test3;
  test2 = name;
  test3 = name;
  testA = name;
  console.log("inside function var testA : ", testA) // Output: "Tejas"
  console.log("inside function let test3 : ", test3) // Output: "Tejas"
  console.log("inside function global defined test2 : ", test2) // Output: "Tejas"
}

changeName("Tejas")
console.log('var test2 outside function : ', test2); // Output: "Tejas"
console.log('var testA outside function : ', testA); // Output: "undefined"
console.log('let test3 outside function : ', test3); // Output: "string3"

const Demo = 0;
console.log("const Demo : ", Demo) // Output: 0

// Demo = 2; updated constant value
console.log("const Demo : ", Demo) // Uncaught TypeError: Assignment to constant variable.

function defineConstant()
{
  const Demo = 4;
  console.log("const Demo : ", Demo) // Output: 4 because inside function allows re declare const
}
defineConstant(); // function calls
console.log("const Demo : ", Demo) // Output: 0


var testUndefine1 = undefined; // initilized with
let testUndefine2 = undefined;
const Demo2;
console.log('var testUndefine1 initilize with testUndefine1 : ', testUndefine1) // Output: "undefined"
console.log('let testUndefine2 initilize with testUndefine2 : ', testUndefine2) // Output: "undefined"
console.log('const Demo2 initilize without assign value : ', Demo2) // Output: Uncaught SyntaxError: Missing initializer in const declaration



