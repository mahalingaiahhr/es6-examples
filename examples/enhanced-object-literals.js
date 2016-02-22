'use strict';

function makeCar(make, model, value) {
	let valueKey = 'value',
		appreciateKey = 'appreciate';
	let getPropertyName = function() {
		return "price"
	};
	
	function getModel() {
		return model;
	}

	return {
	    __proto__: {name:"inherited name"},
		make,  // same as make: make
		model, // same as model: model
		_value: value,
		getModel,

		// computed property keys
		['make' + make]: true,
		[getPropertyName()]: value,
		[appreciateKey]() {
			this.value += 1000;
		},

		// omits function keyword & colon
		depreciate() {
			this.value -= 2000;
		},	

		get value() {
			return this._value;
		},

		// computed property keys also work with property accessors
		set [valueKey](value) {
			this._value = value;
		},
		
		//duplicate property
		prop : 1,
		prop : 2
	};
}

var car = makeCar('Kia', 'Sorento', 40000);

console.log(JSON.stringify(car));
console.log(car.name); //inherited from __proto
console.log(car.getModel());

car.depreciate();
car.appreciate();

console.log(car.value); //39000
console.log(car.price); //40000