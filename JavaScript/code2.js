// studentManagement.js

// Function to add a student
function addStudent(students, student) {
  if (!student.name || !student.age) {
    console.log("Invalid student data"); // No type validation
    return;
  }
  students.push(student);
}

// Function to calculate average age
function calculateAverageAge(students) {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0); // Risk: 'age' might not be a number
  return totalAge / students.length;
}

// Function to get a student by ID
function getStudentById(students, id) {
  return students.find((student) => student.id === id); // Risk: 'id' might not exist
}

// Initial students array
const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: "twenty-two" }, // Issue: 'age' is a string
];

// Adding a new student
addStudent(students, { id: 3, name: "Charlie", age: null }); // Issue: 'age' is null

// Calculating average age
console.log("Average Age:", calculateAverageAge(students)); // Runtime Error: NaN

// Getting a student by ID
console.log(getStudentById(students, 2)); // Works
console.log(getStudentById(students, "wrong-id")); // Issue: No error, but will not work
