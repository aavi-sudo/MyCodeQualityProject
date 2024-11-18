// userProcessor.ts

// Interface for user
interface User {
  name: string;
  age: number;
}

// Function to greet users
function greetUser(user: User): void {
  console.log(`Hello, ${user.name}!`);
}
const user: User = { name: "Alice", age: 30 };
greetUser(user); // Correct usage

// Function to add numbers
function addNumbers(a: number, b: number): number {
  return a + b;
}
console.log(addNumbers(5, 10)); // Correct: 15

// Function to calculate area
function calculateArea(width: number, height: number): number {
  return width * height;
}
// Error prevented: Both arguments are required
console.log(calculateArea(10, 5)); // Correct: 50

// Interface for product
interface Product {
  name: string;
  price?: number;
}

// Accessing product price
const product: Product = {
  name: "Laptop",
};
console.log(product.price?.toFixed(2) ?? "Price not available");

// Enum for status
enum Status {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

function updateStatus(status: Status): void {
  if (status === Status.ACTIVE) {
    console.log("Status is active.");
  }
}
// Error prevented: Invalid status not allowed
updateStatus(Status.ACTIVE); // Correct: "Status is active"

// Function to square a number
function square(num: number): number {
  if (num < 0) throw new Error("Negative numbers not allowed");
  return num * num;
}
const result = square(4); // Guaranteed to be a number
console.log(result.toFixed(2)); // Correct: "16.00"

// Array filtering
const numbers: number[] = [1, 2, 3, 4, 5];
const filtered = numbers.filter((num) => num > 2); // Correct comparison
console.log(filtered); // Correct: [3, 4, 5]
