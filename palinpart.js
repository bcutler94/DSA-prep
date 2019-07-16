// Given a string s, partition s such that every substring of the partition is a palindrome.
// Return all possible palindrome partitioning of s.

// Example:

// Input: "aab"
// Output:
// [
//   ["aa","b"],
//   ["a","a","b"]
// ]

// Problem from Leet Code #131 (https://leetcode.com/problems/palindrome-partitioning/description/)

/*
// generate partitions
// select all palindromes
*/

function palinPart(str) {
    const partitions = getPartitions(str);
    return partitions.filter(subArr => subArr.every(ele => isPalin(ele)));
}

function getPartitions(str) {
    if (str.length === 1) return [ [str] ]
    const prev = getPartitions(str.slice(1));
    const firstChar = str[0];
    let out = [];
    for (let i = 0; i < prev.length; i++) {
        const first = [firstChar].concat(prev[i]);
        const second = [firstChar.concat(prev[i][0])].concat(prev[i].slice(1));
        out.push(first);
        out.push(second);
    }
    return out;
}

function isPalin(str) {
    let mid = Math.floor(str.length / 2);
    let first;
    let second;
    if (str.length % 2 === 0) {
        first = mid - 1;
        second = mid;
    } else {
        first = mid - 1;
        second = mid + 1;
    }
    while (first >= 0) {
        if (str[first] !== str[second]) {
            return false;
        } else {
            first--;
            second++;
        }
    }
    return true;
}


console.log(palinPart('racecar'))