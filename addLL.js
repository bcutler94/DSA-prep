// Write a function, addTwoNumbers(list1, list2), that takes in the head nodes of two linked lists.
// Each linked list represents a number with it's digits in reverse order.
// The function should return the head of a new linked list representing the sum of the two lists.
//
// Examples:
//
// Given input lists (2 -> 4 -> 3) and (5 -> 6 -> 4), the resulting list
// representing the sum would be 7 -> 0 -> 8
// because 342 + 465 = 807
//
// (2 -> 4 -> 3) + (5 -> 6 -> 4) = (7 -> 0 -> 8)    , because 342 + 465 = 807
// (6 -> 2) + (5 -> 3) = (1 -> 6)                   , because 26 + 35 = 61
// (9 -> 9 -> 9) + (5 -> 7) = (4 -> 7 -> 0 -> 1)    , because 999 + 75 = 1074
//
// 
// Assume the following node class:
//
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const head1 = new ListNode (9);
const head2 = new ListNode (5);
head1.next = new ListNode(9);
head2.next = new ListNode(7);
head1.next.next = new ListNode(9);


function addLinkedList(head1, head2, remainder = 0) {
    if (!head1 && !head2) {
        return remainder ? new ListNode (remainder) : null;
    }
    const head1Val = head1 ? head1.val : 0;
    const head2Val = head2 ? head2.val : 0;
    const sum = head1Val + head2Val + remainder;
    remainder = sum >= 10 ? 1 : 0;
    const node = new ListNode (sum % 10);
    node.next = addLinkedList(head1 ? head1.next : null, head2 ? head2.next : null, remainder);
    return node;
}

console.log(addLinkedList(head1, head2));