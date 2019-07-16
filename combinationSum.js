// Write a function, combinationSum(nums, target), that takes in an array of positive numbers and a target sum
// The function should return an array representing all unique combinations of numbers that sum to
// the given target. Numbers may be used as many times as necessary in a single combination.
//
// Examples:
//
// combinationSum([2, 3, 6, 7], 7)
// =>   [
//          [7],
//          [2, 2, 3]
//      ]
//
// combinationSum([2,3,5], 8)
// =>   [
//          [2, 2, 2, 2],
//          [2, 3, 3],
//          [3, 5]
//      ]

/*
iterate thru array subtracting ele from target
if target ever equals 0 add to result
if array is empty return
*/

function comboSum (array, target) {
    if (target === 0) return [[]];
    if (target < 0) return [];

    let out = [];
    for (const num of array) {
        let i = 1;
        const combo = []
        while (num * i <= target) {
            combo.push(num);
            const call = comboSum(array.slice(1), target - (num * i));
            for (let i = 0; i < call.length; i++) {
                call[i] = call[i].concat(combo)
            }
            out = out.concat(call)
            i++;
        }

    }
    return out;
}

console.log(comboSum([2, 3, 6, 7], 7))
/*

*/