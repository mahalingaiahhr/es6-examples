'use strict';

class Rectangle {

    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    getName() {
        return 'Rectangle';
    }

    static create(length, width) {
        return new Rectangle(length, width);
    }
}

class Square extends Rectangle {

    constructor(length) {
        super(length, length);
    }

    getName() {
        return 'Square';
    }
}

var square = new Square(3);

console.log('Area of square 3x3 = ' + square.getArea());                        // 9
console.log('Overrdding Square.getName(): ' + square.getName());                // Square
console.log('square instanceof Square ' + (square instanceof Square));          // true
console.log('square instanceof Rectangle ' + (square instanceof Rectangle));	// true


// Accessing Static member
var rect = Square.create(3, 4);
console.log('Aread of rect 3x4 created from Static method ' + rect.getArea());  // 12

// extends supports expressions and other consturctor functions
function Animal() {

}

class Human extends Animal {

}

var h = new Human();
console.log('Human extended from function ' + (h instanceof Animal));   // true

function getBase() {
    return Animal;
}

class Dynamic extends getBase() {

}

var d = new Dynamic();
console.log('Dynamic extension' + (d instanceof Animal)); // true
