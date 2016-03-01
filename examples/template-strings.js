'use strict';

var user = 'Jane';

//Multine strings. indents will appear as is.
var str = `Hello ${user }!
	How are you
doing?`;
console.log(str);


var a=10, b=30;
function getComputedValue(a, b){
	return b/a;
}

//can use any expressions or function calls
console.log(`${a}*${b}=${a*b}, computed value = ${getComputedValue(a, b)}`);


//tagged template strings
function tagged(literals, ...substitutions) {
	let result = "";

    for (let i = 0; i < substitutions.length; i++) {
        result += "$"+literals[i]+"$";
        result += substitutions[i].toUpperCase();
    }

    result += "$"+literals[literals.length - 1]+"$";

    return result;
}

var modifiedStr = tagged `Hello! ${user}, Welcome`;
console.log(modifiedStr);

//Raw String
console.log(String.raw `Hello ${user}!
How are you \n
doing?`);