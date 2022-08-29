let arr=[5,6,2,7,8,1];
let min=0
let max=0
for(let i=0;i<arr.length;i++){
if(arr[i]>max){
max=arr[i];
}
else{
    min=arr[i];
}
}
console.log(max)
console.log(min)
