function myFunction(x, y, z) {
    return x + y + z;
}
var args = [0, 1, 2];
console.log('ES 5: ' + myFunction.apply(null, args));    // ES5 way
console.log('ES6 Spread: ' + myFunction(...args));

// We can use spread operator multiple times.
console.log('Multiple Spread: ' + myFunction(...[1], ...[2], 3));

// Spead can also be used in Array literals
var arr = [0, 1];
var arr1 = [-1, ...arr, 2];     // [-1, 0, 1, 2]

console.log('Length of array with spread: ' + arr1.length);
