// In ES5
var sum = function(a,b){
	return a+b;
}

//In ES6
var sum6 = (a,b) => a+b; // Implicit return statement

console.log("Sum ES5: "+sum(2,3));
console.log("Sum ES6: "+sum6(2,3));

//For one parameter () is optional
var square = a => a*a;
console.log("Square of 2: "+square(2));

//No parameter
var getNumber = () => 2;
getNumber();

//Multiple statments in body, return statement needs to be added explicitly
var min6 = (a,b) => {
	var min;
	if (a < b) {
		min = a;
	} else {
		min = b;
	}
	return min;
}
console.log("Minimum of 3,2 is "+min6(3, 2));

//Arrow function has no prototype
console.log("Sum prototype: "+sum.prototype);
console.log("Sum6 prototype: "+sum6.prototype);


//this, arguments are lexical
var person = {
	firstName: 'Jock',
	lastName: 'Jill',
	getFullName: function(){
		var that = this;
		var getLastName = function() {
			return that.lastName;
		}
		var getFirstName = function() {
			return that.firstName;
		}
		return getFirstName()+" "+getLastName();
	},
	getFullName6: function(){
		var getLastName = () => this.lastName;
		var getFirstName = () => this.firstName;
		return getFirstName()+" "+getLastName();
	},
	arg: function() {
		console.log("arg arguments: "+Array.prototype.slice.call(arguments).join(" "));
		var arrow = a => {
			console.log("arrow function arguments: "+Array.prototype.slice.call(arguments).join(" "));
		};
		arrow(4);
	}
};

console.log("Fullname in ES5: "+ person.getFullName());
console.log("Fullname in ES6: "+ person.getFullName6());
person.arg(1,2,3);