// studentManagement.ts

// Define a Student interface
interface Student {
  id: number;
  name: string;
  age: number;
}

// Function to add a student
function addStudent(students: Student[], student: Student): void {
  if (!student.name || typeof student.age !== "number") {
    throw new Error("Invalid student data");
  }
  students.push(student);
}

// Function to calculate average age
function calculateAverageAge(students: Student[]): number {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  return totalAge / students.length;
}

// Function to get a student by ID
function getStudentById(students: Student[], id: number): Student | undefined {
  return students.find((student) => student.id === id);
}

// Initial students array
const students: Student[] = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 }, // Corrected: 'age' must be a number
];

// Adding a new student
addStudent(students, { id: 3, name: "Charlie", age: 25 }); // Corrected: Valid data

// Calculating average age
console.log("Average Age:", calculateAverageAge(students)); // Outputs: 22.333...

// Getting a student by ID
console.log(getStudentById(students, 2)); // Outputs: Student object
console.log(getStudentById(students, 99)); // Outputs: undefined
