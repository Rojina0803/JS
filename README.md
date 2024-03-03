# JS
Get Set go for JS.


Overview
This code snippet is a collection of JavaScript examples that cover various aspects of the language, including array literals, object literals, string manipulation, and basic function usage. Each section demonstrates specific features or concepts, making it a valuable resource for learners and developers looking to understand or review these JavaScript fundamentals.

Sections
1. Binary Integer Parsing
javascript
Copy code
parseInt("101", 2); // Result: 5
This section demonstrates how to parse a binary integer using the parseInt function.

2. Array Literals
javascript
Copy code
const coffees = ["French Roast", "Colombian", "Kona"];
const fish = ["Lion", , "Angel"];
const arr = ["333", , "444", , "555"];
Illustrates the creation of arrays and handling extra commas within them.

3. Array Initialization and Access
javascript
Copy code
const myList = ["home", "school", + "hospital"];
const myList1 = ["home", /* empty */, "school", /* empty */];
console.log(myList);
console.log(myList1);
Demonstrates array initialization with potential empty slots and numerical operations.

4. Conditional Statements in Functions
javascript
Copy code
const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };
console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
Shows the use of conditional statements within functions and object creation.

5. Object Literals and Methods
javascript
Copy code
const userone = {
    email: 'ryuu@gmail.com',
    name: 'ryu',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    },
    address: 'streetdowntown'
};
Introduces the creation of objects with properties and methods.

6. String Manipulation
javascript
Copy code
console.log("Joyo's cat".length); // In this case, 10.
console.log("Joyo's car".indexOf("o"));

const name = 'Lev', time = 'today';
console.log(`Hello ${name}, how are you ${time}?`);
Covers basic string manipulation, including length and indexof, and showcases template literals.

7. Miscellaneous
javascript
Copy code
const message =
    'This is' +
    ' my message';
console.log(message);
Demonstrates string concatenation and the usage of template literals.

Usage
This code can be used as a reference or learning material for individuals looking to understand and practice JavaScript fundamentals. Developers can explore and experiment with each section to gain hands-on experience with the language features covered.

Feel free to modify and extend the code to further explore JavaScript concepts and enhance your coding skills.

