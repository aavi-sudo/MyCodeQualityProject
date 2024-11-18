// userProcessor.js

// Function to greet users
function greetUser(user) {
  console.log(`Hello, ${user.name}!`); // Error: No check for 'name' property
}
const user = { age: 30 }; // Missing 'name'
greetUser(user);

// Function to add numbers
function addNumbers(a, b) {
  return a + b; // Risk: String concatenation instead of addition
}
console.log(addNumbers(5, "10")); // Output: "510"

// Function to calculate area
function calculateArea(width, height) {
  return width * height; // Error: Missing 'height' handling
}
console.log(calculateArea(10)); // Output: NaN

// Accessing product price
const product = {
  name: "Laptop",
};
console.log(product.price.toFixed(2)); // Runtime Error: 'price' is undefined

// Function to update status
const Status = {
  ACTIVE: "active",
  INACTIVE: "inactive",
};
function updateStatus(status) {
  if (status === Status.ACTIVEE) { // Typo in 'ACTIVE'
    console.log("Status is active.");
  }
}
updateStatus("activ"); // Silent failure due to typo

// Function to square a number
function square(num) {
  if (num < 0) return "Negative numbers not allowed"; // Returns string
  return num * num; // Returns number
}
const result = square(4);
console.log(result.toFixed(2)); // Runtime Error: 'toFixed' not available on string

// Array filtering
const numbers = [1, 2, 3, "four", 5];
const filtered = numbers.filter((num) => num > 2); // Runtime Error: Comparing string with number
console.log(filtered);


