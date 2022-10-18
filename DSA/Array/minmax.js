let arr= [2,5,3,1,7,4];

let  max =0;
let min = 25;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
    if(arr[i]<min){
min=arr[i];
    }
    

}
console.log(max);
console.log(min);