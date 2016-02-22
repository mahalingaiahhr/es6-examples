(function(){
	'use strict';
	
	var set = new Set();
	set.add(1);
	set.add(2);
	set.add(3);
	set.add(3); //duplicate
	
	for (let val of set) {
		console.log(val);
	}
	console.log("size of set : "+set.size);
	console.log("has 3? "+set.has(3));
	set.delete(2);
	console.log("size after deleting 2: "+set.size);
	set.clear();
	console.log("size after clearing : "+set.size);
		 
	var anotherSet = new Set([1, 0, 1]);
	console.log("Size of Another set : "+anotherSet.size);
	
	var objSet = new Set();
	objSet.add(0);
	objSet.add(-0);
	objSet.add(nan);
	objSet.add(nan);
	
	console.log("Size of Another set : "+objSet.size);
})();