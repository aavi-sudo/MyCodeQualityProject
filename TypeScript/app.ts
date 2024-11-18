// matrix.ts
type Matrix = number[][];

function addMatrices(matrixA: Matrix, matrixB: Matrix): Matrix {
    if (matrixA.length !== matrixB.length) {
        throw new Error("Matrices must have the same number of rows");
    }

    return matrixA.map((row, i) => {
        if (row.length !== matrixB[i].length) {
            throw new Error("Row lengths must match for both matrices");
        }
        return row.map((val, j) => val + matrixB[i][j]);
    });
}

// Example usage
const matrix1: Matrix = [[1, 2], [3, 4]];
const matrix2: Matrix = [[5, 6], [7, 8]];
console.log(addMatrices(matrix1, matrix2)); // Works as expected

// Uncommenting the below will show compile-time errors
// const invalidMatrix: Matrix = [[1, 2], ["invalid"]];
// console.log(addMatrices(matrix1, invalidMatrix)); // Compilation error

