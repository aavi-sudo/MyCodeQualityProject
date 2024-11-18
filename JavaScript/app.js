// matrix.js
function addMatrices(matrixA, matrixB) {
    // No type checks, assumes input is valid
    let result = [];
    for (let i = 0; i < matrixA.length; i++) {
        let row = [];
        for (let j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}

// Example usage
let matrix1 = [[1, 2], [3, 4]];
let matrix2 = [[5, 6], [7, 8]];
console.log(addMatrices(matrix1, matrix2)); // Works as expected

let invalidMatrix = [[1, 2], [3]]; 
console.log(addMatrices(matrix1, invalidMatrix)); // Runtime error (array length mismatch)

