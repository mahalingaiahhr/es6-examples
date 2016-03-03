'use strict';

function* greet(name) {
    yield 'Hi! ' + name;
    yield 'Hello! ' + name;
    yield 'Bye';
}

// Calling generator function wont start execution immediately, but returns a paused generator object
var iter = greet('John');
console.log(JSON.stringify(iter.next()));   // {value: 'Hi! John', done:false}
console.log(JSON.stringify(iter.next()));   // {value: 'Hello! John', done:false}
console.log(JSON.stringify(iter.next()));   // {value: 'Bye', done:false}

function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (let val of range(2, 5)) {
    console.log(val);
}

// The Spread Operator
var a = [1, 2, ...range(3, 4), 5];
console.log('With spread: ' + a);


// You can pass arguments to iterator
function *createIterator() {
    let first = yield 1;
    let second = yield first + 2;       // 4 + 2
    yield second + 3;                   // 5 + 3
}

var iterator = createIterator();

console.log(iterator.next());           // '{ value: 1, done: false }'
console.log(iterator.next(4));          // '{ value: 6, done: false }'
console.log(iterator.next(5));          // '{ value: 8, done: false }'

// Return from iterator function
function* createIt() {
    yield 1;
    return 2;
    yield 3;
}

let it = createIt();

console.log(it.next());           // '{ value: 1, done: false }'
console.log(it.next());           // '{ value: 2, done: true }'
console.log(it.next());           // '{ value: undefined, done: true }'


// Combined iterators
function* createNumberIterator() {
    yield 1;
    yield 2;
}

function *createColorIterator() {
    yield 'red';
    yield 'green';
}

function *createCombinedIterator() {
    yield *createNumberIterator();
    yield *createColorIterator();
    yield true;
}

iterator = createCombinedIterator();

console.log(iterator.next());           // '{ value: 1, done: false }'
console.log(iterator.next());           // '{ value: 2, done: false }'
console.log(iterator.next());           // '{ value: 'red', done: false }'
console.log(iterator.next());           // '{ value: 'green', done: false }'
console.log(iterator.next());           // '{ value: true, done: false }'
