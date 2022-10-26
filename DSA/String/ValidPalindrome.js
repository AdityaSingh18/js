Input: s = "race a car"
let arr=[]
       let s1= s.toLowerCase()
       let s3= "";
    for(let i=0;i<s1.length;i++){
        if(s1[i]==',' || s1[i]==' ' || s1[i]==':'){
            continue;
        }
        s3 = s3+s1[i]
    }

    let s4="";
   for(let i=s3.length-1;i>=0;i--){
    s4= s3[i]+s4
   }

console.log(s3)
console.log(s4)
if(s4==s3){
    console.log(true)
}
else{
    console.log(false)
}





var isPalindrome = function(s) {
    s = s.replaceAll(/[^a-zA-Z0-9]/gi, "").toLowerCase();

    let start =0;
    let end = s.length-1;
    while(start<=end) {
        if(s[start] != s[end])
            return false;
        else{
            start++;
            end--;
        }      
    }
    return true;
    
}