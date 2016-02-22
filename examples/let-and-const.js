'use strict';
function letExample(){
   try {
    console.log('a before: '+a); //ReferenceError, TDZ for a
  } catch (e){
    console.log("a before catch block: "+e);
  }

  let a = 10;
  console.log('a after: '+a);
  if (true) {
    let b='Hello';
    console.log('b inside block: '+b);
  }
  try {
    console.log(b); //ReferenceError
  } catch (e){
    console.log("b outside catch block: "+e);
  }
}
letExample();

console.log('-----------------loop example--------');

function loopExample(){
  var myarr=[];

  for (let i=0; i<3; i++) {
      myarr.push(function(){
          console.log("i in loop: "+i);
      });
  }

  try {
    console("i after loop: "+i); //ReferenceError
  } catch (e){
    console.log(e);
  }
  console.log(myarr[0]());
  console.log(myarr[1]());
  console.log(myarr[2]()); 
}

loopExample();

console.log('-----------------const example--------');

function constExample(){
  const a = "Hello";
  //a = 0;
  //const b;
  
  const person = {
	  name: 'Jock',
	  age: 20
  };
  
  person.name = "Jill"; //This is fine
  console.log(person.name);
  person = {}; //This is not fine
}
//constExample();

var globalvar = 10;
let globalLet = 20;
console.log("Global var: "+window.globalvar);
console.log("Global Let: "+window.globalLet);