//using Objects

const person={
    name: 'Max',
    age:29,
    greet(){
        console.log('Hi, i am ',this.name)
    }
}

const privateName = ({name})=>{
    console.log(name)
}

privateName(person)

const {name, age} = person;
console.log(name,age);


//using array

const hobbies = ['Sports', 'Cooking']

const [hobby1,hobby2]= hobbies;
console.log(hobby1,hobby2)