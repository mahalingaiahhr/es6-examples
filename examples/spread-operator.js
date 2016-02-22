function myFunction(x, y, z) {
	return x+y+z;
}
var args = [0, 1, 2];
console.log(myFunction.apply(null, args));
console.log(myFunction(...args));


//We can use spread operator multiple times.
console.log(myFunction(...[0], ...[1], ...[2]));

var arr = [0, 1];
var arr1 = [-1, ...arr, 2] //[-1, 0,1,2]

console.log("Arr1 length: "+arr1.length);