// In ES5
var sum = function(a,b){
	return a+b;
}

//In ES6
var sum6 = (a,b) => a+b; // Implicit return statement

console.log("Sum of 2, 3: "+sum6(2,3));

//For one parameter () is optional
var square = a => a*a;
console.log("Square of 2: "+square(2));

//No parameter
var getNumber = () => 2;
console.log(getNumber());

//Multiple statments in body, return statement needs to be added explicitly
var min = (a,b) => {
	var min;
	if (a < b) {
		min = a;
	} else {
		min = b;
	}
	return min;
}
console.log("Minimum of 3,2 is "+min(3, 2));

//Arrow function has no prototype
console.log("Sum prototype: "+sum.prototype);
console.log("Sum6 prototype: "+sum6.prototype);

//this, arguments are lexical
var person = {
	firstName: 'Jock',
	lastName: 'Jill',
	getFullName: function(){
		var getLastName = () => this.lastName;
		var getFirstName = () => this.firstName;
		return getFirstName()+" "+getLastName();
	},
};

console.log("Fullname: "+ person.getFullName());

var argExample = function() {
	console.log("arg arguments: "+Array.from(arguments).join(" "));
	var arrow = a => {
		console.log("arrow function arguments: "+Array.from(arguments).join(" "));
	};
	arrow(4);
}

argExample(1,2,3);