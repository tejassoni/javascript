/*
* JavaScript Object
* @author: Tejas Soni
* @project: JavaScript Object Demonstration
* @description: This code demonstrates the concept of objects in JavaScript, including creation, property access, methods, and nested objects.
* @js: JavaScript
* @version: 1.0
*/

// what is object in javascript?
// An object is a complex data type that allows you to store collections of data and more complex entities.
// Objects are used to represent real-world entities and can contain properties (key-value pairs) and methods (functions).

// Creating an object using object literal syntax
let person = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

console.log("Object example: let person = {name: 'John Doe', age: 30, isEmployed: true, greet: function() {...}};");
console.log("Type of person:", typeof person, ", Value:", person);
// output: Type of person: object , Value: [object Object]

// Accessing object properties
console.log("Accessing properties:");
console.log("Name:", person.name); // John Doe
console.log("Age:", person.age);   // 30  
console.log("Is Employed:", person.isEmployed); // true

// Calling object method
console.log("Calling method:");
person.greet(); // Hello, my name is John Doe

// Creating an object using the Object constructor
let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
car.start = function() {
    console.log("The car has started.");
};

console.log("Object example using Object constructor: let car = new Object(); car.make = 'Toyota'; ...;");
console.log("Type of car:", typeof car, ", Value:", car);
// output: Type of car: object , Value: [object Object]

// Accessing object properties
console.log("Accessing properties:");
console.log("Make:", car.make); // Toyota
console.log("Model:", car.model); // Camry
console.log("Year:", car.year); // 2020

// Calling object method
console.log("Calling method:");
car.start(); // The car has started.

// Creating an object using a constructor function
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    };
}

let book1 = new Book("1984", "George Orwell", 1949);
console.log("Object example using constructor function: let book1 = new Book('1984', 'George Orwell', 1949);");
console.log("Type of book1:", typeof book1, ", Value:", book1);
// output: Type of book1: object , Value: [object Object]

// Accessing object properties
console.log("Accessing properties:");
console.log("Title:", book1.title); // 1984
console.log("Author:", book1.author); // George Orwell
console.log("Year:", book1.year); // 1949

// Calling object method
console.log("Calling method:");
console.log(book1.getSummary()); // 1984 was written by George Orwell in 1949.

// Creating an object using Object.create()
let animal = {
    type: "Mammal",
    sound: function() {
        console.log("Animal sound");
    }
};

let dog = Object.create(animal);
dog.breed = "Labrador";
dog.sound = function() {
    console.log("Bark");
};

console.log("Object example using Object.create(): let dog = Object.create(animal); dog.breed = 'Labrador'; ...;");
console.log("Type of dog:", typeof dog, ", Value:", dog);
// output: Type of dog: object , Value: [object Object]

// Accessing object properties
console.log("Accessing properties:");
console.log("Type:", dog.type); // Mammal (inherited from animal)
console.log("Breed:", dog.breed); // Labrador

// Calling object method
console.log("Calling method:");
dog.sound(); // Bark

// Demonstrating nested objects
let company = {
    name: "Tech Solutions",
    address: {
        street: "123 Main St",
        city: "Metropolis",
        country: "Fictionland"
    },
    employees: 100
};

console.log("Nested Object example: let company = {name: 'Tech Solutions', address: {...}, employees: 100};");
console.log("Type of company:", typeof company, ", Value:", company);
// output: Type of company: object , Value: [object Object]

// Accessing nested object properties
console.log("Accessing nested properties:");
console.log("Company Name:", company.name); // Tech Solutions
console.log("Street:", company.address.street); // 123 Main St
console.log("City:", company.address.city); // Metropolis
console.log("Country:", company.address.country); // Fictionland

// Modifying object properties
company.employees = 120;
console.log("Updated number of employees:", company.employees); // 120  

// Deleting object properties
delete company.address;
console.log("After deleting address property, company object:", company);
// output: After deleting address property, company object: {name: "Tech Solutions", employees: 120}

// Checking if a property exists in an object
console.log("Does 'name' property exist in company?", 'name' in company); // true
console.log("Does 'address' property exist in company?", 'address' in company); // false

// Iterating over object properties
console.log("Iterating over company object properties:");
for (let key in company) {
    console.log(key + ": " + company[key]);
}
// output: 
// name: Tech Solutions
// employees: 120

