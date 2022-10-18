let s = "aabb";
let stack=[];
        for(let i=0;i<s.length;i++)
        {
            if(stack[stack.length-1]==s[i])
            {
                stack.pop();
            }
            stack.push(s[i]);
        }
        console.log(stack.join(''));