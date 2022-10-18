"use strict";

var getA = function(a){
    return a;

};

let getA= a => a;
console.log(getA(2));

let square = a => a*a;

console.log(square(2));


let square = (a) => {
    return a*a;
};


var a=4;
let square = () => {
    return a*a;
};

let mult = (a,b) => {
    return a*b;
}

var x = function(){
    this.val =1;

    setTimeout(function(){
this.val++;
console.log(this.val)

    },1)
};

//fat arrow
var xx = new x();

var x = () =>{
    this.val =1;

    setTimeout(function(){
this.val++;
console.log(this.val)

    },1)
};

var xx = new x();


var x = (...n) => {
    console.log(n[0]);
};

x(1,2,3);