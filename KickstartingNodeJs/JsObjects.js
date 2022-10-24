const person = {
    name : 'Max',
    age : '20',
    greet(){
        console.log('Hey, i am '+ this.name )
    }
}

person.greet()

/*
const person = {
    name : 'Max',
    age : '20',
    greet : ()=>{
        console.log('Hey, i am'+this.name )
    }
}

person.greet()
*/