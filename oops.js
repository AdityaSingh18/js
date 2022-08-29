function Student(firstname,lastname,roll_no,sex,dob){
this.firstname=firstname;
this.lastname=lastname;
this.roll_no=roll_no;
this.sex=sex;
this.dob=new Date(dob);
this.getbirthyear=function(){
    return this.dob.getFullYear();
}
this.fullname= function(){
    let l=`${this.firstname} ${this.lastname}`;
    return l;
};
}
function Minage(age){
    let curryear = 2022;

    if( (curryear-student1.getbirthyear())>=age){
        console.log(`student1 is eligible`);
    }
    else{
        console.log(`Student1 is not eligible`);
    }

}

const student1 = new Student('Shivam','Sharma','5','M',4-3-2000);
const student2 = new Student('Rahul','Jain','7','M', 3-6-2002);
student1.getbirthyear() >student2.getbirthyear()?console.log(student2.fullname()):console.log(student1.fullname());
Minage('18');






