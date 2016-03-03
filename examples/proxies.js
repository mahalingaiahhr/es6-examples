(function(){
	'use strict';

	//Without any handler
	var target = {firstName:'Maha', lastName:'HR', age: 25};
	var handler = {};
	var proxy1 = new Proxy(target, handler);

	console.log(proxy1.firstName); //Maha
	proxy1.age=30;
	console.log(proxy1.age); //30
	console.log(target.age); //30


	//Proxy With handler to provide default value for missing property

	handler = {
		 get: function(target, key){
			 console.log('Requesting for key- '+key);
			return key in target? target[key] :	50;
		}
	}

	var p2 = new Proxy({a:1, b:2}, handler);
	console.log(p2.b); //2
	console.log(p2.c); //50

	//Two way data binding with proxy

	var firstNameDiv = document.createElement('div');
	firstNameDiv.id='firstName';
	var ageDiv = document.createElement('div');
	ageDiv.id='age';
	document.body.appendChild(firstNameDiv);
	document.body.appendChild(ageDiv);

	var tar = {firstName:'Jack', age: 20};
	var dataHandler = {
		set(tarObj, key, value){
			document.getElementById(key).textContent =value;
			return Reflect.set(tarObj, key, value);
		},

		deleteProperty: function (target, key) {
			console.log('deleting key- '+key);
			return Reflect.deleteProperty(target, key);
		 }
	}
	var p3 = new Proxy(tar, dataHandler);
	p3.age=20;
	p3.firstName='Jill';
	delete p3.age;
	console.log('Age after delete- '+p3.age);
})();
