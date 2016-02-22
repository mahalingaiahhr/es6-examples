'use strict';
var iterable = {
	[Symbol.iterator](){
		return {
			count:5,
			next: function() {
				return this.count > 0 ? {done: false, value: this.count--}: {done:true, value:undefined};
			},
			return() {
				console.log("Retunrned");
			},
			throw(e) {
				console.log("thrown ::"+e.message);
			}
		};
	}
};

for (let val of iterable) {
	console.log(val);
}

for (let val of iterable) {
	if (val == 3) break;
	console.log(val);
}

for (let val of iterable) {
	if (val == 3) throw "I am stopping";
	console.log(val);
}