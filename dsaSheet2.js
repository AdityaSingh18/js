class SpecialStack {
    constructor(){
  this.stack =[]
  this.minStack=[]
    }
  
    push(x){
   if(!this.stack.length){
       this.stack.push(x)
       this.minStack.push(x)
   }
   else{
       this.stack.push(x)
       this.minStack.push(Math.min(this.minStack[this.minStack.length-1],x))
   }
     }
    
 
    pop(){
     if(!stack.length) return null;
     this.minStack.pop();
     return this.stack.pop();
    }
  
  
  
    isFull(){
      return this.stack.size
    }
  
    isEmpty(){
     if(!this.stack.length){
         return true
     }
     else false
    }
 
    getMin(){
        return this.minStack[this.minStack.length-1]
    }
  }

  let obj = new SpecialStack();
  obj.push(5)
  obj.push(3)
  obj.push(2)
  console.log(obj.getMin())


