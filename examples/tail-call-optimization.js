 function id(x) {
	return x; // (A)
}
function f(a) {
	var b = a + 1;
	return id(b); // (B)
}
console.log(f(2)); // (C)


function add(a,b){
  return a + b;
}

function sumTwoNumbers(a,b){
	var a=1, b=2;
	return add(a,b); //Tail call optmized
}


function sumTwoNumbers(a,b){
	var a=1, b=2;
	var sum = add(a,b);
	return sum; //Tail call not optmized
}

function sumTwoNumbers(a,b){
	var a=1, b=2;
	add(a,b); //Tail call not optmized, because implicit return undefined
}

function sumTwoNumbers(a,b){
	var a=1, b=2;
	return a+ add(b,b); //Tail call not optmized due to addition operation after function call
}

function addOne(a){
  var one = 1;
  function inner(b){
    return b + one;
  }
  return inner(a); //Tail call not optmized, because inner needs outer a
}
