'use strict';
function letExample(){
  let a = 10;
  console.log('a: '+a);
  if (true) {
    let b='Hello';
    console.log('b inside block: '+b);
  }
  try {
    console.log(b); //ReferenceError
  } catch (e){
    console.log("b outside catch block: "+e);
  }

  try {
    console.log(c); //ReferenceError, TDZ for c
  } catch (e){
    console.log("c before declaration catch block: "+e);
  }
  let c = 30;

}
letExample();

function loopExample(){
  var myarr=[];

  for (let i=0; i<3; i++) {
      myarr.push(function(){
        console.log("i in loop: "+i);
      });
  }

  try {
    console(i); //ReferenceError
  } catch (e){
    console.log("i after loop: "+e);
  }

  myarr[0]();
  myarr[1]();
  myarr[2]();
}
loopExample();

console.log('-----------------const example--------');
function constExample(){
  const a = "Hello";

  console.log("const a: "+a);
  //a = 0;
  //const b; SyntaxError
  
  const person = {
	  name: 'Jock',
	  age: 20
  };
  
  person.name = "Jill"; //This is fine
  console.log(person.name);
  //person = {}; //This is not fine
}
constExample();

var globalvar = 10;
let globalLet = 20;
console.log("Global var: "+window.globalvar);
console.log("Global Let: "+window.globalLet);

let x = 10;  //Declaring mutliple times is not allowed either with let or var or const
//var x=20; SyntaxError
console.log(x);