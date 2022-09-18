var count = 0;
class Student{
     
    constructor(name,age,phoneNumber,boardmarks){
        count++;
        this.name = name;
        this.age = age;
        this.phoneNumber= phoneNumber;
        this.boardmarks= boardmarks;

console.log(`Total Students ${count}`);
        this.checkEligibility(this.boardmarks);
    }
checkEligibility(marks){
if(marks>40){
    console.log(`${this.name} is Eligible`);
}
if(marks<40){
    console.log(`${this.name} is not Eligible`);
}
}
    
}

let arjun = new Student('arjun',18,96123131,36);
let ram = new Student('ram',21,23123131,46);
let shivam = new Student('Shivam',21,23123131,43);
let rahul = new Student('Rahul',23,23123131,46);
let Joy = new Student('Joy',21,23123131,20);