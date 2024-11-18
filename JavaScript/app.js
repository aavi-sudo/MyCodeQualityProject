// userManagement.js

// User list management system

// Create a user
function createUser(data) {
  if (!data.name || !data.age) {
    console.log("Invalid user data"); // Validation issue: No type checks
    return;
  }

  const user = { id: Math.random().toString(36), ...data }; // Risk: `id` is not enforced
  return user;
}

// Get a user's age
function getUserAge(user) {
  return user.age + " years"; // Risk: `age` might be missing or non-numeric
}

// Process a list of users
function processUsers(users) {
  return users.filter((user) => user.age >= 18); // Risk: Assuming all users have `age`
}

// Define some sample users
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie" }, // Missing age
  "Invalid user", // Invalid data type
];

const newUser = createUser({ name: "Diana", age: 22 });
console.log("New User:", newUser);

console.log("All Adults:", processUsers(users)); // Runtime Error: Cannot read property `age`
