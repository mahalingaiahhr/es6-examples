'use strict';

var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

console.log(typeof sym1); //Symbol
console.log(typeof sym2); //Symbol
console.log(sym2 === sym3); // false

var obj = {'name': "Jock"};
var age = Symbol('age');
obj[age] = 10;

function wrapSymbol(){
	var lastName= Symbol('lastName');
	var age= Symbol('age');
	obj[lastName]='Jill';
	obj[age] = 20;
}
wrapSymbol();

obj['lastName']="last Name";

for(var key in obj) {
	console.log("key: "+key);
}

console.log(JSON.stringify(obj));
var symbols = Object.getOwnPropertySymbols(obj);
for (let sy of symbols) {
	console.log(obj[sy]);
}
