let addtwo = function(x,y){
    console.log(x+y);

}

let addtwobind = addtwo.bind(this,2,3);
addtwobind();