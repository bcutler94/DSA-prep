// Given a list of integers,
// write a function that returns the largest sum of non-adjacent numbers. 
// Numbers can be 0 or negative.
//
// Examples:
//
// [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. 
// [2, 4, 8, 8, 13]
// [5, 1, 1, 5] should return 10, since we pick 5 and 5.
// [5, 5, 6, 10]
// [1, 2, 3]
// [1]
// Similar problem from Leet Code #198 (https://leetcode.com/problems/house-robber/description/)

function largestSum (array) {
    if (array.length === 0) return [];
    const out = [array[0]]
    for (let i = 1; i < array.length; i++) {
        const nonAdj = out[out.length - 2] ? out[out.length - 2] : 0;
        const currSum = array[i] + nonAdj;
        const prevSum = out[out.length - 1];
        out.push(Math.max(prevSum, currSum));
    }
    return out[out.length - 1];
}

console.log(largestSum([-5, 1, 1, 5]))

