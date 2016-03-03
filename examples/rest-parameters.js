'use strict';

function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log('sum of 1, 2 = ' + sum(1, 2));
console.log('sum of 1, 2, 3 = ' + sum(1, 2, 3));


function sumMulti(m, ...args) {
    return m * args.reduce((a, b) => a + b);
}

console.log('sum of 1, 2, 3, with multiplied by 2 = ' + sumMulti(2, 1, 2, 3));
