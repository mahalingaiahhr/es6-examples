'use strict';

class Person{
	
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	};
	
	getFullName() {
		return this.firstName+" "+this.lastName;
	};

	get ln(){
		return this.lastName;
	};
	
	set ln(ln){
		this.lastName=ln;
	};
	
	static create(fn, ln, age) {
        return new Person(fn, ln, age);
    };

}

var p = new Person('Jock', 'Jill', 25);
console.log(p.getFullName()+", "+p.age+", "+p.ln);
var p1 = Person.create("Tom", "Jerry", 18);
console.log("Static create: "+p1.getFullName()+", "+p1.age);

//class expression
var AnotherClass = class {
	constructor (name) {
		this.name = name;
	}
};
var a = new AnotherClass('Hello');
console.log("Class expression example: "+a.name);