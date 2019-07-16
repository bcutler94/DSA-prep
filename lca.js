// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]

//        3
//      /   \
//    5      1
//   / \    / \
//  6   2  0   8
//     / \
//    7   4

// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.

// Example 2:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

// Note:
// All of the nodes' values will be unique.
// p and q are different and both values will exist in the binary tree.

// Assume the following node class:
//
// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = this.right = null;
//     }
// }

// Similar problem from Leet Code #236 (https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/)

var lowestCommonAncestor = function (root, p, q) {
    const graph = getObj(root);
    let first = p;
    let arr1 = [];
    while (first !== null) {
        arr1.unshift(first);
        first = graph[first.val];
    }
    let second = q;
    let arr2 = [];
    while (second !== null) {
        arr2.unshift(second);
        second = graph[second.val];
    }
    let out = arr1[0];
    for (let i = 1; i < Math.max(arr1.length, arr2.length); i++) {
        if (arr1[i] !== arr2[i]) break;
        out = arr1[i]
    }
    return out
};

function getObj(root) {
    const obj = {};
    const stack = [[root, null]];
    while (stack.length > 0) {
        const [node, parent] = stack.pop();
        obj[node.val] = parent ? parent : null
        if (node.right) stack.push([node.right, node]);
        if (node.left) stack.push([node.left, node]);
    }
    return obj;
}