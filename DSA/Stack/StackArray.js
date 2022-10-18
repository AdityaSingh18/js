class Stack{

    constructor(){
        this.items=[]
        this.count=0;
    }

    push(val){
        this.items[this.count]=val;
        this.count++;
    }
    pop(){
        this.items[--this.count]= undefined;
    }

    top(){
     console.log(this.items[--this.count])
    }

    size(){
        console.log(this.count+1)
    }

    show(){
        console.log(this.items)
    }

    

}



let obj = new Stack();
obj.push(5)
obj.push(6)
//obj.pop()
obj.show()
obj.top()
obj.size()