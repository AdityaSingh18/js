//Q.1 https://leetcode.com/problems/concatenation-of-array/
/*
var getConcatenation = function(nums) {
    let ans=[];
  for(let i=0;i<nums.length;i++){
      ans[i]=nums[i];
  }
    
    for(let i=0;i<nums.length;i++){
        ans.push(nums[i]);
    }


return ans;
}
*/


 /* Q2. https://leetcode.com/problems/shuffle-the-array/

   var shuffle = function(nums, n) {
    let ans=[];
       for(let i=0;i<nums.length-n;i++){
           ans.push(nums[i]);
           
           for(let j=n+i;j<nums.length;j++){
               ans.push(nums[j])
               break;
           }
       }
   
   return ans;
};
*/

/*
 Kids With the Greatest Number of Candies
var kidsWithCandies = function(candies, extraCandies) {
    let max=candies[0];
    for(let i=0;i<candies.length;i++){
        if(candies[i]>max){
            max= candies[i]
        }
    }
    
    let arr=[];
    for(let i=0;i<candies.length;i++){
        if((extraCandies+candies[i])>=max){
            arr[i]= true;
        }
        else{
            arr[i]=false;
        }
    }
    return arr;
};
*/
/*
https://leetcode.com/problems/number-of-good-pairs/
let nums = [1,2,3,1,1,3];
let count =0;
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        
      if(nums[i]==nums[j]){
          count++;
      }
    }
}
console.log(count);
*/

/*

How Many Numbers Are Smaller Than the Current Number
var smallerNumbersThanCurrent = function(nums) {
    let arr=[];
    for(let i=0;i<nums.length;i++){
        let count=0;
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                count++;
            }
        }
    arr[i]=count;
    }
    
    return arr;
};
*/


//reverse an array
/*

let arr= [1,2,3,4];

for(let i=0;i<arr.length;i++){
    for(let j= arr.length-1;j>=0;j--){

let temp = arr[i];
arr[i]=arr[j]
arr[j]=temp;
    }
}
console.log(arr);
*/
let arr = [[0, 1, 1, 1],
           [0, 0, 1, 1],
           [1, 1, 1, 1],
           [0, 0, 0, 0]
        ]
let n=3;
let m=3;
        let max =0;
        for(let i =0;i<n;i++){
            let rowmax= 0;
            for(let j=0;j<m;j++){
                if(arr[i][j]==1){
                    rowmax++;
                }
                
                if(rowmax>max){
                    max=rowmax;
                }
            }
        }
       
