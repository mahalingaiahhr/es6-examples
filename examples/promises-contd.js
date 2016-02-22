(function(){
	'use strict';
	
	//chaining
	let p1 = new Promise(function(resolve, reject) {
		resolve(42);
	});

	p1.then(function(value) {
		console.log("value1: "+value);         // "42"
		return value + 1;
	}).then(function(value) {
		console.log("value2: "+value);         // "43"
	});
	
	//Can return promises too
	
	let p2 = new Promise(function(resolve, reject) {
		resolve("Hello");
	});

	p2.then(function(value) {
		console.log(value);         		   // "Hello"
		let p3 = new Promise(function(resolve, reject) {
			resolve("How are you");
		});
		return p3;
	}).then(function(value) {
		console.log(value);         // "How are you"
	});
	

})()