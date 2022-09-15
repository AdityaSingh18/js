let arr= [4,2,6,5,1];
let max =0;
let min=0

for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max= arr[i];
    }
    else {
        min = arr[i];
    }
}
console.log(max);
console.log(min);
