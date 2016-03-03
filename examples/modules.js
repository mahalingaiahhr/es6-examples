// example.js
export var color = 'red';
export let name = 'Nicholas';
export const magicNumber = 7;

// export function
export function sum(num1, num2) {
    return num1 + num1;
}

// export class
export class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}

// this function is private to the module
function subtract(num1, num2) {
    return num1 - num2;
}

// define a function
function multiply(num1, num2) {
    return num1 * num2;
}

// export later
export multiply;


// main.js

import { sum, multiply, magicNumber } from './example';
console.log(sum(1, magicNumber));   // 8
console.log(multiply(1, 2));        // 2

import * as example from 'example'; // You can import all exports
console.log(example.sum(1, example.magicNumber));          // 8
console.log(example.multiply(1, 2));    // 2

// example.js, Renaming Exports and Imports

export { sum as add };

// Import will be used as
import { add } from './example';

// We can rename imports too
import { add as sum } from './example';
console.log(typeof add);            // 'undefined'
console.log(sum(1, 2));             // 3


// Default export and import

// person.js
export default class Person {
    constructor(fs, ls) {
        this.firstName = fs;
        this.lastName = ls;
    }
    getFullname() {
       return this.firstName + ' ' + this.lastName;
    }
}

// main.js
import Person from './person';
var p = new Person('Jock', 'Jill');
console.log( p.getFullName());      // Jock Jill
