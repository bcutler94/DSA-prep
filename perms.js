// Write a function, permutations(array), that takes in an array of unique elements.
// The function should return a new array containing all permutations of the given array.
// Note that generating all permutations is the same as generating all possible orderings of the input array.
//
// Examples:
//
//
// permutations(['a', 'b'])
// => [ 
//  [ 'a', 'b' ], 
//  [ 'b', 'a' ] 
// ]
//
// permutations([1,2,3])
// => [ 
//  [ 1, 2, 3 ],
//  [ 2, 1, 3 ],
//  [ 2, 3, 1 ],
//  [ 1, 3, 2 ],
//  [ 3, 1, 2 ],
//  [ 3, 2, 1 ] 
// ]

function perms(array) {
    if (array.length <= 1) return [ array ];
    const restOfArray = perms(array.slice(1));
    const char = array[0];
    const out = [];
    for (const combo of restOfArray) {
        for (let i = 0; i <= combo.length; i++) {
            const newCombo = combo.slice(0, i).concat([char]).concat(combo.slice(i));
            out.push(newCombo);
        }
    }
    return out;
}

console.log(perms([1, 2, 3]))