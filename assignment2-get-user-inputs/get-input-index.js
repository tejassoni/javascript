// get uset input by id
let userName = document.getElementById("name");
console.log("input text name by id :", userName.value);

let email = document.getElementById("email").value;
console.log("input email by id :", email);

let mobile = document.getElementById("mobile").value;
console.log("input number by mobile id :", mobile);

let address = document.getElementById("address").value;
console.log("input textarea address by id :", address);

let country = document.getElementById('country').value;
console.log("input select option country by id :", country);


let genderChecked = document.querySelector('input[name="gender"]:checked').value;
console.log("input radio gender by name for checked :", genderChecked);

let genderUnchecked = document.querySelectorAll('input[name="gender"]');

let genderUncheckedValue;
genderUnchecked.forEach(input =>
{
  if (!input.checked) // unchecked values
  {
    genderUncheckedValue = input.value;
  }
});

console.log("input radio gender by name for unchecked :", genderUncheckedValue);

let hobbyChecked = document.querySelector('input[name="hobby"]:checked').value;

console.log("input checkbox hobby by name for checked :", hobbyChecked);

let hobbyUnChecked = document.querySelectorAll('input[name="hobby"]');

let hobbyUnCheckedValue = [];
hobbyUnChecked.forEach(input =>
{
  if (input.checked) // checked values
  {
    hobbyUnCheckedValue.push(input.value)
  }
});
console.log(hobbyUnCheckedValue)

let nameValue = document.querySelector('input[name="name"]').value;
console.log("input text name by querySelector :", nameValue);

nameValue = document.getElementsByClassName('name');
console.log("input text name by className :", nameValue[0].value)

email = document.getElementsByClassName('email')[0];
console.log('input text email by className :', email.value)

nameValue = document.getElementsByName('name')[0];
console.log(nameValue)

inputs = document.getElementsByTagName('input');
for (let i = 0; i < inputs.length; i++)
{
  console.log("input values", inputs[i].value)
}

// change text color
const input = document.getElementById("name");
input.style.color = "#0066cc";         // Text color
input.style.backgroundColor = "#f0f0f0"; // Background color
input.style.fontWeight = "bold";       // Bold text


