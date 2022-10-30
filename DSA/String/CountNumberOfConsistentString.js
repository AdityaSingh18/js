
let allowed = "ab"
let words = ["ad","bd","aaab","baa","badab"]
let set = new Set();
for(let i=0;i<allowed.length;i++){
    set.add(allowed[i]);
}
let count=0;
for(let i=0;i<words.length;i++){
let flag = true;
for(let j=0;j<words[i].length;j++){
if(!set.has(words[i][j])){
    flag = false;
}
    
}
if(flag==true){
    count++;
}
}
return count