// script.js (Part 1)

// Variables
let userName = "yoya";
let userAge = 20;

// Conditional
if (userAge >= 18) {
  console.log(userName + " is an adult ✅");
  document.getElementById("welcome").textContent = "Welcome, " + userName + "!";
} else {
  console.log(userName + " is a minor ❌");
  document.getElementById("welcome").textContent = "Hello, young " + userName + "!";
}

// Functions (Part 2)

// A simple function
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Javascrpt Basics")); // Output: Hello, Rameta!

// Function to calculate totals
function calculateTotal(price, quantity) {
  return price * quantity;
}

let total = calculateTotal(50, 3);
console.log("Your total is: " + total);

// Loops (Part 3)

// For loop
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

// While loop
let n = 3;
while (n > 0) {
  console.log("Countdown: " + n);
  n--;
}

// Array with forEach
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(function(fruit) {
  console.log("I like " + fruit);
});

// DOM Manipulation (Part 4)

// Select elements
let button = document.getElementById("changeBtn");
let message = document.getElementById("message");

// Add click event
button.addEventListener("click", function() {
  message.textContent = "You clicked the button! 🎉";
  message.style.color = "blue";
});
