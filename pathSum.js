// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//        5
//       / \
//      4   8
//     /   / \
//    11  13  4
//   /  \    / \
//  7    2  5   1
//  Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

// Problem from Leet Code #113 (https://leetcode.com/problems/path-sum-ii/description/)

// dfs

var pathSum = function (root, sum) {
    if (!root) return [];
    if (sum - root.val === 0 && !root.right && !root.left) return [[root.val]];
    if (sum - root.val !== 0 && !root.right && !root.left) return [];

    const rightArray = pathSum(root.right, sum - root.val);
    const leftArray = pathSum(root.left, sum - root.val);

    rightArray.forEach(ele => ele.unshift(root.val));
    leftArray.forEach(ele => ele.unshift(root.val));
    const out = [];
    out.push(...rightArray);
    out.push(...leftArray);
    return out
};