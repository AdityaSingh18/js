let s="()[]{}"
let stack = []
    for(let i=0;i<s.length;i++){

        if(s.charAt(i)=='('){
          stack.push(s.charAt(i))  
        }
        
        else if(s.charAt(i)=='['){
          stack.push(s.charAt(i))  
        }
        else if(s.charAt(i)=='{'){
          stack.push(s.charAt(i))  
        }
        
        else if(s.charAt(i)==')'){
            if(stack[stack.length-1]=='('){
                stack.pop()
            }
            else{ return false}
        }
         else if(s.charAt(i)=='}'){
            if(stack[stack.length-1]=='{'){
                stack.pop()
            }
            else{ return false}
        
    }
          else if(s.charAt(i)==']'){
            if(stack[stack.length-1]=='['){
                stack.pop()
            }
            else{ return false}
            }
    }
    if(stack.length==0){
        console.log("true")
    }
    else{
        console.log("false")
    }