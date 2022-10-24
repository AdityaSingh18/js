var name= 'Max';
console.log(name)

var secondName = name;
console.log(secondName)

name= 'Chris';
console.log(secondName)


var person ={
    age: 28,
    name: 'Max',
    hobbies: ['Sports','Cooking']
}
var thirdperson ={
    age: 28,
    name: 'Max',
    hobbies: ['Sports','Cooking']
}
console.log(person)

//var secondperson = person;
var secondperson = Object.assign({},person);
console.log(secondperson);

var myhobbies = person.hobbies.slice();

person.name = 'Chris';
person.hobbies.push('Reading')
console.log(secondperson)
console.log(thirdperson)