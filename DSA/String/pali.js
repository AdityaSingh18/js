let s = "abca";
let revstr= '';
for(let i=s.length-1;i>=0;i--){
revstr= revstr+s.charAt(i);
}
if(revstr==s){
    return 1;
}
else{
    return 0;
}
