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
        return "Rectangle";
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
        return "Square";
    }
}

var square = new Square(3);

console.log(square.getArea());              // 9
console.log(square.getName());              // Square
console.log(square instanceof Square);      // true
console.log(square instanceof Rectangle);	// true


//Accessing Static member
var rect = Square.create(3, 4);
console.log(rect.getArea());  //12

//extends supports expressions and other consturctor functions
function Animal(){

}

class Human extends Animal{
	
}
var h = new Human();
console.log(h instanceof Animal); //true

function getBase() {
    return Animal;
}

class Dynamic extends getBase(){
}
var d = new Dynamic();
console.log(d instanceof Animal); //true