let obj = {
    num: 2
}


let addThis = function(a,b,c){
    return this.num+a+b+c;
}

//let arr=[3,3,2];
//console.log(addThis.call(obj,3));

//console.log(addThis.apply(obj,arr));

//let bound = addThis.bind(this,2,3,5);
//bound();


let student = {
    age:20,
    
    feature: function(){
        console.log(`Age is ${this.age}`)
    }
    }


    let print = student.feature.bind(student);
    print();

