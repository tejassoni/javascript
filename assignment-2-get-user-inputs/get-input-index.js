/*
 * JavaScript Get User Inputs
 * @author: Tejas Soni
 * @project: Get User Inputs Demonstration
 * @description: This code demonstrates different ways to get user input from HTML form elements in JavaScript, including input, textarea, select, radio, checkbox, and style manipulation, with output samples.
 * @js: JavaScript
 * @version: 1.0
 */

// Get user input by id
let userName = document.getElementById("name");
console.log("input text name by id :", userName.value);
// output: input text name by id : [value of input with id="name"]

let email = document.getElementById("email").value;
console.log("input email by id :", email);
// output: input email by id : [value of input with id="email"]

let mobile = document.getElementById("mobile").value;
console.log("input number by mobile id :", mobile);
// output: input number by mobile id : [value of input with id="mobile"]

let address = document.getElementById("address").value;
console.log("input textarea address by id :", address);
// output: input textarea address by id : [value of textarea with id="address"]

let country = document.getElementById("country").value;
/*
 * Operators in JavaScript
 * @author: Tejas Soni
 * @project: Operator Demonstration
 * @description: This code demonstrates various operators in JavaScript including arithmetic, assignment, comparison, logical, bitwise, ternary, typeof, instanceof, delete, and void operators.
 * @js: JavaScript
 * @version: 1.0
 */
console.log("input select option country by id :", country);
// output: input select option country by id : [selected value of select with id="country"]

let genderChecked = document.querySelector(
  'input[name="gender"]:checked'
).value;
console.log("input radio gender by name for checked :", genderChecked);
// output: input radio gender by name for checked : [checked value of gender radio]

let genderUnchecked = document.querySelectorAll('input[name="gender"]');
let genderUncheckedValue;
genderUnchecked.forEach((input) => {
  if (!input.checked) {
    // unchecked value
    genderUncheckedValue = input.value;
  }
});
console.log("input radio gender by name for unchecked :", genderUncheckedValue);
// output: input radio gender by name for unchecked : [unchecked value of gender radio]

let hobbyChecked = document.querySelector('input[name="hobby"]:checked').value;
console.log("input checkbox hobby by name for checked :", hobbyChecked);
// output: input checkbox hobby by name for checked : [checked value of hobby checkbox]

let hobbyUnChecked = document.querySelectorAll('input[name="hobby"]');
let hobbyUnCheckedValue = [];
hobbyUnChecked.forEach((input) => {
  if (input.checked) {
    // checked values
    hobbyUnCheckedValue.push(input.value);
  }
});
console.log(
  "input checkbox hobby by name for checked (array):",
  hobbyUnCheckedValue
);
// output: input checkbox hobby by name for checked (array): [array of checked values]

let nameValue = document.querySelector('input[name="name"]').value;
console.log("input text name by querySelector :", nameValue);
// output: input text name by querySelector : [value of input with name="name"]

nameValue = document.getElementsByClassName("name");
console.log("input text name by className :", nameValue[0].value);
// output: input text name by className : [value of first input with class="name"]

email = document.getElementsByClassName("email")[0];
console.log("input text email by className :", email.value);
// output: input text email by className : [value of first input with class="email"]

nameValue = document.getElementsByName("name")[0];
console.log("input text name by getElementsByName :", nameValue.value);
// output: input text name by getElementsByName : [value of first input with name="name"]

let inputs = document.getElementsByTagName("input");
for (let i = 0; i < inputs.length; i++) {
  console.log("input values", inputs[i].value);
  // output: input values [value of each input element]
}

// Change text color and style for input with id="name"
const input = document.getElementById("name");
input.style.color = "#0066cc"; // Text color
input.style.backgroundColor = "#f0f0f0"; // Background color
input.style.fontWeight = "bold"; // Bold text
// output: The input text color changes to #0066cc, background to #f0f0f0, and text becomes bold
