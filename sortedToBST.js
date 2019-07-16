// Write a function, sortedArrayToBST(nums), that takes in a sorted array.
// The function should return the root of a balanced binary search tree containing the
// elements of the array. A balanced binary search tree is a tree where the height of left and right subtrees of 
// every node never differ by more than 1.
//
// Examples:
//
// sortedArrayToBST([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
// =>
//                  5
//                /   \
//               2     8
//              / \   / \
//             0   3  6  9
//              \   \  \  \
//               1   4  7  10
//
// Note that there are many balanced binary search trees that can be formed from a sorted array
// Above is just one example.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function sortedArrayToBST(array) {
    if (array.length === 0) return null;
    const mid = Math.floor(array.length / 2);
    const node = new Node (array[mid]);
    node.left = sortedArrayToBST(array.slice(0, mid));
    node.right = sortedArrayToBST(array.slice(mid + 1));
    return node;
}

console.log(sortedArrayToBST([1, 2, 3]))