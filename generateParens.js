// Write a function, generateParens(n), that takes in a number.
// The function should return an array representing all combinations of n pairs of parentheses.
//
// Examples:
//
// generateParens(3)
// =>   [
//          "((()))",
//          "(()())",
//          "(())()",
//          "()(())",
//          "()()()"
//      ]
//
// generateParens(2)
// =>   [
//          "()()",
//          "(())"
//      ]
//
// Sourced from Leet Code #22 (https://leetcode.com/problems/generate-parentheses/)
/*
base n = 1 return ()
*/

var generateParenthesis = function (n, set = new Set()) {
    if (n === 1) return ["()"];
    if (n <= 1) return []
    const perms = generateParenthesis(n - 1, set);
    const out = [];
    for (const parens of perms) {
        for (let i = 0; i < parens.length - 1; i++) {
            if (parens[i] === '(' && parens[i + 1] === ')') {
                const middle = parens.slice(0, i + 1) + "()" + parens.slice(i + 1);
                const side = parens.slice(0, i) + '()' + parens.slice(i);
                if (!set.has(middle)) out.push(middle);
                set.add(middle);
                if (!set.has(side)) out.push(side);
                set.add(side);
            }
        }
    }
    return out;
};

console.log(generateParens(4))