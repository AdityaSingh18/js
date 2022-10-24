class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }

    setplacementAge(minPlacementAge){

        return function eligibleForCurrentCompany(minMarks){
            if(this.marks>minMarks && this.age>minPlacementAge){       
                console.log(this.name+'is ready for placement')
            }
            else{
                console.log(this.name+'is not ready for placement')
            }
        }
    }
}
const yash = new Student('Yash',25,75)    
const vaibhav = new Student('vaibhav',13,35)
yash.setplacementAge(18)(40)


//nomral function looks at current  object which is calling the function,yash
//fat arrow function looks at the object which is in lexical scope of it