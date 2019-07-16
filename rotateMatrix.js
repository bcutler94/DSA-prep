// You are given an n x n 2D matrix.
// Rotate the matrix by 90 degrees (clockwise).

// Note:
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],
/*
[7, 2, 1]
[4, 5, 6]
[9, 8, 3]
*/
// loop outside changing 4 vals at at time, iterate one less than row size
// move inwards 

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

// Similar problem from Leet Code #48 (https://leetcode.com/problems/rotate-image/description/)

function rotateMatrix(matrix) {
    let len = matrix.length - 2;
    let level = 0;
    while (level < len) {
        let i = 0;
        while (i <= len - (level * 2)) {
            const topLeft = matrix[level][level + i];
            const topRight = matrix[level + i][len + 1 - level];
            const bottomRight = matrix[len + 1 - level][len + 1 - i - level];
            const bottomLeft = matrix[len + 1 - i - level][level];
            matrix[level + i][len + 1 - level] = topLeft;
            matrix[len + 1 - level][len + 1 - i - level] = topRight;
            matrix[len + 1 - i - level][level] = bottomRight;
            matrix[level][level + i] = bottomLeft;
            i++;
        }
        level++;
    }
    return matrix;
}

// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ]
console.log(rotateMatrix([
    [4, 1, 1, 1, 1],
    [4, 5, 5, 5, 2],
    [4, 8, 9, 6, 2],
    [4, 7, 7, 6, 2],
    [3, 3, 3, 3, 2]
]))