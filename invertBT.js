// Invert a binary tree.

// Example:

// Input:
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// Output:
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// Assume the following node class:
//
// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = this.right = null;
//     }
// }

// Problem from Leet Code #226 (https://leetcode.com/problems/invert-binary-tree/description/)
/*
left and right flipped

*/

class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

const root = new Node (0);
root.right = new Node (10);
root.left = new Node (-10);
root.right.right = new Node (20);
root.right.left = new Node (5);
root.left.left = new Node (-20);
root.left.right = new Node (-5);

function invertBT(root) {
    if (!root) return;
    const leftChild = root.left;
    const rightChild = root.right;
    root.right = leftChild;
    root.left = rightChild;
    invertBT(root.right);
    invertBT(root.left);
    return root;
}

console.log(invertBT(root));