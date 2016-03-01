console.log("a  before declaration: "+a);
if (true) {
	var c = 30;
}
var a = 20; 
console.log("a after declaration: "+a);
console.log("c = "+c); 


var myarr=[];

for (var i=0; i<3; i++) {
  myarr.push(function(){
	  console.log("i in loop ="+i);
  });
}

console.log("i after loop: "+i);
myarr[0]();
myarr[1]();
myarr[2]();