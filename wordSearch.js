// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" 
// cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:
const board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

// const board = [
//     ['a', 'a']
// ]

// iterate over matrix, if we find first letter BFS
// once we find first letter perform BFS

// use backtracking

// const word = "ABCCED"
// const word = "SEEDASF"
// const word = "aaa"
// const word = 'SEE'

// Problem from Leet Code #79 (https://leetcode.com/problems/word-search/description/)

function wordSearch(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                const set = new Set ();
                const dfsBool = dfs(board, word.slice(1), i, j, set);
                if (dfsBool) return true;
            }
        }
    }
    return false;
}

function dfs(board, word, row, col, visited) {
    visited.add(String([row, col]));
    if (word.length === 0) return true;

    const options = [];

    const up = board[row - 1] ? board[row - 1][col] : null;
    if (up) {
        options.push([up, row - 1, col]);
    }

    const down = board[row + 1] ? board[row + 1][col] : null;
    if (down) {
        options.push([down, row + 1, col]);
    }

    const right = board[row][col + 1];
    if (right) {
        options.push([right, row, col + 1]);
    }

    const left = board[row][col - 1];
    if (left) {
        options.push([left, row, col - 1]);
    }

    for (const cell of options) {
        const [char, newRow, newCol] = cell;
        if (word[0] === char && !visited.has(String([newRow, newCol]))) {
            const res = dfs(board, word.slice(1), newRow, newCol, visited);
            if (res === true) {
                return true;
            }
            visited.delete(String([newRow, newCol]))
        } 
        
    }

    return false;
}

console.log(wordSearch(board, word))

