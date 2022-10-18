//this inside global

this.table= 'window table';
console.log(window.table);

const cleanTable = function(soap){

    const innerFunction = function(){

    
    console.log(`cleaning ${this.table} using ${soap}`);
    }
    innerFunction.call(this,soap);
}




this.garage ={
    table:'garage table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
};

console.log(this.garage.table);

//this inside a object

let johnsRoom ={
    table:'Johns table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
};
console.log(johnsRoom.table)


//this inside a method

johnsRoom.cleanTable();
this.garage.cleanTable;

//this inside a function

cleanTable();

//call function

cleanTable.call(this,'some Soap');

//this inside a constructor

let createRoom = function(name){
    this.table = `${name}s table`
}

const jillsRoom  = new createRoom('jill');
const johnsRoom = new createRoom('John')

jillsRoom.cleanTable('some table');


//this inside a class


class createRoom {
    constructor(name){
        this.table=`${name}s table`
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table} using ${soap}`);
    }
}