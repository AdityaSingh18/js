let count=0;
class User{
    
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
        count++;
        

    }
    static countUsers(){
        console.log(`total number of users: ${count} `);
    }

    register(){
        console.log(`${this.username} is now registered`);
    }

}
class Member extends User{
    constructor(username,email,password,MemberPackage){
        super(username,email,password);
        this.MemberPackage=MemberPackage;
        let curr_date = new Date();
    let membershipactivetillYear = curr_date.getFullYear();
    let membershipactivetillMonth = curr_date.getMonth();
    let membershipactivetillDay = curr_date.getDay();
    this.membershipactivetilldate = new Date(
      membershipactivetillYear,
      membershipactivetillMonth,
      membershipactivetillDay
    );

    }
    getpackage(){
    console.log(`${this.username} is subscribed to the ${this.MemberPackage}`)
    }
    
    membership(){
       this.date = new Date()
      this.date.setDate(this.date.getDate()+30);
      console.log(`you got 30days free trail till ${this.date}`);
      
    
    }
    renew_membership(){
       
        const membershiptillYear = this.membershipactivetilldate.getFullYear();
    const membershiptillMonth = this.membershipactivetilldate.getMonth();
    const membershiptillDay = this.membershipactivetilldate.getDay();

    this.membershipactivetilldate = new Date(
      membershiptillYear,
      membershiptillMonth + 1,
      membershiptillDay
    )

    
    }
       
    }
    


let user1 = new User('Rahul','rahul@gmail.com','1234');
let user2 = new Member('shivam','shivam@gmail.com','1234','standard');

user1.register();
user2.register();
user2.getpackage();
User.countUsers();
user2.membership();
user2.renew_membership();
