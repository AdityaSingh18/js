const person={
    firstname: 'Stephan',
    lastname : 'Mark',
    age: 25,
    hobbies :['Movies','Sports','Singing'],
    address : {
street: '50 main st',
city: 'boston',
state:'MA'
    }
}
console.log(person.hobbies[0]);
console.log(person.address.state);
const {age,address:{state}}= person;
console.log(age);
console.log(state);

const todos=[
{
    id : 1,
text : 'take out trash',
iscompleted:true
},
{
    id : 2,
    text : 'meeting boss',
    iscompleted:true
    },
{id : 3,
        text : 'denstist appt',
        iscompleted:false
        }

]

for(let i=0;i<todos.length;i++){
    console.log(todos[i].id);
}
let i=0
while(i<todos.length){
    console.log(todos[i].id);
    i++;
}