// Given an index k, return the kth row of the Pascal’s triangle.

// Pascal’s triangle : To generate A[C] in row R, sum up A’[C] and A’[C-1] from previous row R - 1.

// Pascal’s triangle example:
//           1
//         1   1
//       1   2   1
//     1   3   3   1
//   1   4   6   4   1
// 1   5
// o(nlogn)
// Examples:
// Input : k = 3
// Return : [1,3,3,1]
// NOTE : k is 0 based. k = 0, corresponds to the row [1].

// Problem from Leet Code #119 (https://leetcode.com/problems/pascals-triangle-ii/description/)

function pascals(k) {
    if (k === 0) return [1];
    if (k === 1) return [1, 1];
    const row = pascals(k - 1);
    const newRow = [1];
    for (let i = 1; i < row.length; i++) {
        const num = row[i - 1] + row[i];
        newRow.push(num);
    }
    newRow.push(1);
    return newRow;
}

console.log(pascals(4))