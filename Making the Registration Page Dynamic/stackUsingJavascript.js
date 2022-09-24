
class MyStack{

    constructor(s){
this.stackArray = [];
this.top = -1;
this.maxsize =s;
    }


push(element){

this.stackArray[++this.top]= element;
    }

    pop(){
this.stackArray.length-1
this.stackArray[top--];
    }

    print(){
        console.log(this.stackArray);
    }
}



let stack = new MyStack(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.print()

/*class MyStack{
stackArray=[];
MyStack(s){
    maxSize = s;
    Stack[maxSize];
    top =-1;
}

push(j){
    stackArray[++top]= j;

}

pop(){
    return stackArray[top--];
}

peek(){
    stackArray[top];
}

isEmpty(){
    return (top ==-1)

    }

isFull(){
return (top ==maxSize -1);
    }
}

let stack = new MyStack;

stack.push(5);

*/
