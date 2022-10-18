let N = 4
let arr= [-5,-2,-3,-4];
function maxSubarraySum(arr, N){
    let sum =0
   let max=arr[0]
   
   for(let i=1;i<arr.length;i++){
       sum = sum+arr[i]
       
       if(sum>max){
           max=sum;
       }
       if(sum<0){
           sum=0
       }
       }
       return max 
   }

console.log(maxSubarraySum(arr,N))
