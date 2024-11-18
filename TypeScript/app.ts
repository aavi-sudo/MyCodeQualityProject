// userManagement.ts

// Define a User interface
interface User {
  id: string;
  name: string;
  age: number;
}

// Create a user
function createUser(data: Omit<User, "id">): User {
  if (!data.name || typeof data.age !== "number") {
    throw new Error("Invalid user data");
  }

  const user: User = { id: Math.random().toString(36), ...data };
  return user;
}

// Get a user's age
function getUserAge(user: User): string {
  return `${user.age} years`;
}

// Process a list of users
function processUsers(users: User[]): User[] {
  return users.filter((user) => user.age >= 18);
}

// Define some sample users
const users: User[] = [
  { id: "1", name: "Alice", age: 25 },
  { id: "2", name: "Bob", age: 17 },
  { id: "3", name: "Charlie", age: 19 },
];

// Adding new user
const newUser = createUser({ name: "Diana", age: 22 });
console.log("New User:", newUser);

// Process users safely
console.log("All Adults:", processUsers(users));
