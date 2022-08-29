class Student{
    constructor(firstname,lastname,dob){
        this.firstname=firstname;
        this.lastname=lastname;
        this.dob= new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }
}
const student1 = new Student('Shivam','Sharma','4-3-2000');
const student2 = new Student('Rahul','Jain','3-6-2002');
console.log(student1.getFullName());
console.log(student1.getBirthYear());