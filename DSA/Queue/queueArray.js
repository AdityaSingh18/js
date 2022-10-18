class Queue{
    
    constructor(){
        this.items=[]
        this.count=0;
        this.minpos=0;
    }


    enqueue(val){


    this.items[this.count]=val;
    this.count++
    }

    dequeue(){
    this.minpos++;
    }

    size(){
        this.items.length;

    }

    show(){
        console.log(this.items)
        for(let i=this.minpos;i<this.count;i++){
            console.log(this.items[i])
        }
    }
}


let obj = new Queue();

obj.enqueue(5)
obj.enqueue(3)
obj.enqueue(4)
obj.dequeue()
obj.dequeue()
obj.enqueue(7)
obj.show()