
//function statement
function a(){
    console.log("a is called")
}

//function expression

var b= function(){
    console.log("b");
}
b();


//anonymous function
//function(){

//}

var c= function(){
    console.log("c")
}
c();

//first class function

var d = function(para1){
    return function xyz(){

    }
}
console.log(d());



function divideit(number1){
    
    return (number2) => number1/number2;
}

console.log(divideit(10)(2));