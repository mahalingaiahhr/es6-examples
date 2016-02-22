(function(){
	'use strict';

	//Promise function executed first
	let promise = new Promise(function(resolve, reject) {
		console.log("Promise started");
		resolve();
	});
	console.log("Hi!");
	
	
	//resolve is asynchronously
	let promise2 = new Promise(function(resolve, reject) {
		console.log("Promise1 started");
		resolve();
	});

	promise2.then(function() {
		console.log("Promise2 Resolved.");
	});

	console.log("Hi2");

	
	function delay(interval, result) {
		return new Promise(function(resolve, reject) {
			setTimeout(function(){
			    if (result){
			        resolve(result)
			    } else {
			        reject("Something went wrong");
			    }
			  }, interval);
		});
	}
	
	var p1 = delay(1000, {a:2, b:2});
	p1.then(function(result){
		console.log("Result after 1 second: "+JSON.stringify(result));
	});

    var p2 = delay(2000);
	p2.then(function(result){
		console.log("Result: "+result); //This is never called
	}).catch(function(cause){
		console.error("Caught! "+cause);
	});

	var p3 = delay(3000, "Hello");
	p3.then(function(result){
	    console.log("Result: "+result);
		throw "An error";
	}).catch(function(cause){
		console.error("Caught! "+cause);
	});
	
	//promise.catch  will be called if there is any error inside promise
	var promise1 = new Promise(function(resolve, reject) {
		throw new Error("Explosion!");
	});

	promise1.catch(function(error) {
		console.log(error.message);     // "Explosion!"
	});

})();