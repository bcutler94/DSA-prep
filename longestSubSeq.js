// Given an unsorted array of integers, find the length of longest increasing subsequence.

// Example:

// Input: [10, 9, 2, 5, 3, 7, 101, 18]
// Output: 4 
// Explanation: The longest increasing subsequence is [2, 3, 7, 101] (or [2, 5, 7, 101], [2, 5, 7, 18]....)
// therefore the length is 4. 
// Note:

// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n^2) complexity.

// Problem from Leet Code #300 (https://leetcode.com/problems/longest-increasing-subsequence/description/)
// [10, 9, 2, 5, 3, 7, 101, 18]

// [1, 5, 2, 3, 1]
// [1, 1, 1, 1, 1]
var lengthOfLIS = function (array) {
    if (array.length === 0) return 0
    let max = 1;
    const out = Array(array.length).fill(1);
    for (let i = 1; i < array.length; i++) {
        let count = 0;
        for (let j = 0; j < i; j++) {
            if (array[j] < array[i]) {
                count = Math.max(out[j], count);
            }
        }
        out[i] = count + 1
        max = Math.max(max, out[i])
    }
    return max
}

// var lengthOfLIS = function (nums) {
//     if (nums.length === 1) return 1;
//     const diffs = getRateOfChange(nums);
//     console.log(diffs)
//     let maxCount = 0;
//     for (let i = 0; i < diffs.length; i++) {
//         const num = diffs[i]
//         if (num >= 0) {
//             const count = getCount(diffs, i);

//             if (count > maxCount) maxCount = count;
//         }
//     }
//     return maxCount;
// };

// function getRateOfChange(nums) {
//     const out = [];
//     for (let i = 1; i < nums.length; i++) {
//         out.push(nums[i] - nums[i - 1]);
//     }
//     return out;
// }

// function getCount(array, i) {
//     let sum = array[i];
//     let count = 1;
//     for (let k = i + 1; k < array.length; k++) {
//         sum += array[k];
//         if (array[k] > 0) {
//             count++
//         } else if (sum < 0) {
//             break;
//         }
//     }
//     return count;
// }

// var lengthOfLIS = function (nums) {
//     //     delete max and count consecutive
//     let count = 0;
//     let copy = [...nums];
//     while (copy.length > count) {
//         count = counter(copy);
//         const max = Math.max(...copy);
//         const idx = copy.indexOf(max);
//         copy = copy.slice(0, idx).concat(copy.slice(idx + 1));
//     }

//     return count;
// };

// function counter(arr) {
//     let max = arr[0];
//     let count = 1;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             count++
//             max = arr[i];
//         }
//     }
//     return count;
// }

console.log(longestSS([10, 9, 2, 5, 3, 7, 101, 18]))