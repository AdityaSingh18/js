let s= '()';
    let stack = [];

    for(let i=0;i<s.length;i++){
        
        if(s.charAt(i)=='('){
            stack.push('(');
        }
        else if(s.charAt(i)=='{'){
            stack.push('{');
    }
        else if(s.charAt(i)=='['){
            stack.push('[');
}
        
        
        else if(s.charAt(i)==')'){
            if(stack.length>0 && stack[stack.length-1]=='('){
            stack.pop();
        }
            else {return false;}
        }
         else if(s.charAt(i)=='}'){
            if(stack.length>=0 && stack[stack.length-1]=='{'){
            stack.pop();
        }
            else{ return false;}
        }
         else if(s.charAt(i)==']'){
            if(stack.length>=0 && stack[stack.length-1]=='['){
            stack.pop();
        }
             else {return false;}
        }
        
       
    }
    if(stack.length==0){
        return true;
    }
    else{
        return false;
    }