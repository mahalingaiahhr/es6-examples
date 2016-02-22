var someArray = [1, 2, 3];

//In ES5
var first = someArray[0];
var second = someArray[1];
var third = someArray[2];

//In ES6
var [f, s, t]= someArray;

console.log(`f=${f}, s=${s}, t=${t}`);

//We can skip some items
var [,,last] = ["foo", "bar", "baz"];
console.log(last); //baz

//And we can capture all trailing items in an array with a “rest” pattern:
var [head, ...tail] = [1, 2, 3, 4];
console.log(tail);		// [2, 3, 4]

//undefined when array that are out of bounds or don’t exist
var [missing] = [];
console.log("missing= "+missing); // undefined

// We can capture nested properties too.
var [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(`foo=${foo}, bar=${bar}, baz=${baz}`);

// Swapping variables;
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(`Swapping a=${a}, b=${b}`);

//Function returning multiple values
function samFunction() {
	var a =10;
	var b = 20;
	var c= 30;
	return [a, b, c];
}
var [a, b, c] = samFunction();
console.log(`a=${a}, b=${b}, c=${c}`);

//Destructuring objects

var obj = { foo: "lorem", bar: "ipsum" };
var { foo, bar } = obj;
console.log(foo+", "+bar); // "lorem, ipsum"

//Assigning property to different variable
var {foo:x, bar:y} = obj;
console.log(x+", "+y); // "lorem, ipsum"


//nested assignment
var complicatedObj = {
  arrayProp: [
    "First",
    { second: "Second" }
  ]
};

var { arrayProp: [first, { second }] } = complicatedObj;
console.log(first+", "+second);

// get undefined when properties that are not defined
var { missing } = {};
console.log("missing= "+missing);

//We can provide default values when value is missing
var [missing = true] = [];
console.log("missing= "+missing);

var { message: msg = "Something went wrong" } = {};
console.log(msg); // "Something went wrong

//destructing in parameters
function userId({id}) {
  return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(displayName + " is " + name);
}

var user = { 
  id: 42, 
  displayName: "jdoe",
  fullName: { 
      firstName: "John",
      lastName: "Doe"
  }
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"