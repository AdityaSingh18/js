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

