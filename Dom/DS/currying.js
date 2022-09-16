/*
let multiply = function(x,y){
    console.log(x*y);

}
*/
let multiply= function(x){
    return function(Y){
        console.log(x * y);
    }
}


let multiplytwo = multiply.bind(2);
multiplytwo(3);

let multiplythree = multiply.bind(3);
multiplytwo(10);
//let multiplytwo = multiply.bind(this,2);
//multiplytwo(5);

//let multithree = multiply.bind(this,3)
//multithree(5);