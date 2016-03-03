// Not supported in Chrome yet

'use strict';
var someArray = [1, 2, 3];

// In ES5
var fir = someArray[0];
var secd = someArray[1];
var third = someArray[2];

// In ES6
var [f, s, t] = someArray;

console.log(`f=${f}, s=${s}, t=${t}`);

// We can skip some items
var [, , last] = ['foo', 'bar', 'baz'];
console.log('After skipping First two in [foo, bar, baz] -> ' + last); // baz

// And we can capture all trailing items in an array with a rest pattern:
var [head, ...tail] = [1, 2, 3, 4];
console.log('Tail destructuring - ' + tail);		//  [2, 3, 4]

// undefined when array that are out of bounds or don't exist
var [missing] = [];
console.log('missing= ' + missing); //  undefined

// We can capture nested properties too.
var [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(`[foo, [[bar], baz]] = [1, [[2], 3]] -> foo=${foo}, bar=${bar}, baz=${baz}`);

// Swapping variables;
var x = 1;
var y = 3;
[x, y] = [y, x];
console.log(`Swapping 1,3 x=${x}, y=${y}`);

// Functon returning multiple values
function samFunction() {
    var a = 10;
    var b = 20;
    var c = 30;
    return [a, b, c];
}
var [a, b, c] = samFunction();
console.log(`Multiple Return values: a=${a}, b=${b}, c=${c}`);


// Destructuring objects
var obj = { firstName: 'Jock', lastName: 'Jill' };
var { firstName, lastName } = obj;
console.log(`object destructing: ${firstName}, ${lastName} `); //  'Jock, Jill'

// Assigning property to different variable
var {firstName: fn, lastName: ln} = obj;
console.log(`${fn}, ${ln}`); //  'Jock, Jill'


// nested assignment
var complicatedObj = {
    arrayProp: ['First', { second: 'Second' }]
};

var { arrayProp: [first, { second }] } = complicatedObj;
console.log(first + ', ' + second);

//  get undefined when properties that are not defined
var { missed } = {};
console.log('missing= ' + missed);

// We can provide default values when value is missing
[missed = true] = [];
console.log('missing= ' + missed);

var { message: msg = 'Something went wrong' } = {};
console.log(msg); //  'Something went wrong

// destructing in parameters
function userId({id}) {
    return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}) {
    console.log(displayName + ' is ' + name);
}

var user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

console.log('userId: '  +  userId(user)); // 'userId: 42'
whois(user); // 'jdoe is John'
