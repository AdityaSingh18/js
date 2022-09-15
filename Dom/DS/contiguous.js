let arr=[-1,-2,-3,-4];
max=arr[0];
for(let i=0;i<arr.length;i++){
    let sum=0
    for(let j=i;j<arr.length;j++){
        sum=sum+arr[j];
    }
    if(sum>max){
        max=sum;
    }
    if(sum<0){
        sum=0;
    }
}
console.log(max);