// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:
// const matrix = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]];
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.

// Example 2:
// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.

// Problem from Leet Code #695 (https://leetcode.com/problems/max-area-of-island/description/)

function islands(matrix) {
    let max = 0;
    const set = new Set ();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            const tempMax = getArea(matrix, i, j, set)
            if (tempMax > max) max = tempMax;
        }
    }
    return max;
}

function getArea(matrix, row, col, set) {
    let key = `${row},${col}`;
    if (set.has(key)) return 0;
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) return 0;
    if (!matrix[row][col]) return 0;
    set.add(key);
    const up = getArea(matrix, row - 1, col, set);
    const down = getArea(matrix, row + 1, col, set);
    const right = getArea(matrix, row, col + 1, set);
    const left = getArea(matrix, row, col - 1, set);

    return 1 + up + down + right + left;
}

console.log(islands(matrix));