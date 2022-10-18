class Stduent{
    constructor(name,age,marks){
        this.name = name;
        this.age;
        this.marks= marks;
    }

    PlacementAge(minAge){
    return (MinMarks)=>{
        if(this.marks>minAge && this.age>minAge){
            console.log(this.name+" is ready for placement");
        }
        else{
            console.log(this.name+" is not ready for placement");
        }
    }
    }
}

const shivam = new Stduent('shivam',25,56);
const rahul = new Stduent('rahul',15,35);
const Roahn = new Stduent('Rohan',23,55);
const Alex = new Stduent('alx',25,33);
const varun = new Stduent('varun',25,33);


shivam.PlacementAge(18)(40);

