

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
//conatins duplicate

/*
var containsDuplicate = function(nums) {
    for(let i =0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
         if(nums[i]==nums[j]){
             return true;
         }
            
        }
    }
 return false;
};
*/






/*

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
       
*/
/*
let num = [1,2,0,0];
let  k = 34;
let ans;
    for(let i=0;i<num.length-1;i++){
        ans =(num[i]*10)+num[i+1]+ans;
    }
   ans = ans+k;
    
    let arr=[];
for(let i=num.length-1;i>=0;i--){
    let div= ans%10;
    arr[i]=div;
    div = div/10;
    
}
    console.log(arr);


    Find the Duplicate Number

    var findDuplicate = function(nums) {
        for(let i =0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
    if(nums[i]==nums[j]){
            
            return nums[i];
        }
    }
    }
    };
    */
   /*

    let nums1 = [1,2,3,0,0,0]
    let  m = 3
    let  nums2 = [2,5,6]
    let n = 3

    //op=  [1,2,2,3,5,6]
let counter=0;
for(let i =m;i<nums1.length;i++){
    nums1[i]=nums2[counter];
    counter++;
}

for(let i=0;i<nums1.length;i++){
    for(let j=0;j<nums1.length-1-i;j++){
        if(nums1[j]>nums1[j+1]){
        let temp = nums1[j];
        nums1[j]=nums1[j+1];
        nums1[j+1]=temp;
        }
    }
}
console.log(nums1)
*/
//Transpose Matrix
/*
let arr1 = [[1,2,3],[4,5,6],[7,8,9]];
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1[i].length;j++){
        console.log(arr1[j][i])
    }
}
*/
/*
let matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
let arr3=[[],[],[]];
for(let i=0;i<matrix1.length;i++){
    for(let j=0;j<matrix1[i].length;j++){
        arr3[i][j]=matrix1[j][i]
    }
}
     console.log(arr3)

     */
/*
    let arr5=  [-2,1,-3,4,-1,2,1,-5,4];
    for(let i=0;i<arr5.length;i++){
        for(j=0;j<arr5.length;j++){
            console.log(arr5[j])
        }
    }'*/
/*
    let arr6=  [-2,1,-3,4,-1,2,1,-5,4]
let max= 0;

    for(let i=0;i<arr6.length;i++){
        let loopmax=0;
        for(j=i;j<arr6.length;j++){
        
            loopmax=arr6[j]+loopmax;
        }
        if(loopmax>max){
        max= loopmax;
            
        }
        }
        console.log(max)
        */
/*
       let root = [1,null,2,3]

        var preorderTraversal = function(root) {
            if(!root) return [];
         
            const stack=[root];
             const result=[];
         
            while(stack.length){
             let node=stack.pop();
         
             result.push(node.val);
         
              if(node.right){
         
               stack.push(node.right)
         
             }
         
             if(node.left){
         
               stack.push(node.left)
         
             }
         
           }
         
           console.log(result)
         
         };
         
         preorderTraversal([1,null,2,3])
*/
//Maximum Subarray
/*
let max = nums[0];
    let cur = 0;
    
    for(let i = 0; i < nums.length; i++) {
        cur += nums[i];
        
        if(cur > max) max = cur
        if(cur < 0) cur = 0
    }
    
    return max;
    */
/*
    //Chocolate Distribution Problem-binary

    class Solution{
        findMinDiff(arr,n,m){
            let val= 10000;
            
           arr.sort((a,b)=>{
               return a-b
           })
           
           for(let i=0;i<=n-m;i++){
               let minval= arr[i];
               let maxval = arr[i+m-1];
               let diff= maxval-minval;
               
               if(diff<val){
                   val=diff
               }
           }
           
           return val;
        }
    }
    
    }

*/
/*
let arr=[17 ,83, 59 ,25 ,38 ,63 ,25 ,1 ,37]
let n=9;
let m=9;
function minDiff(arr,n,m){
        let val= 1000;
        
       arr.sort((a,b)=>{
           return a-b
       })
       
       for(let i=0;i<=n-m;i++){
           let minval= arr[i];
           let maxval = arr[i+m-1];
           let diff= maxval-minval;
           
           if(diff<val){
               val=diff
           }
       }
       
       console.log(val);
    }
    
    minDiff(arr,n,m);
   

*/

/*
33. Search in Rotated Sorted Array

class StackQueue{
    constructor(){
        this.s1 = new Stack();
        this.s2 = new Stack();
    }
    
    /**
     * @param {number} B
    */
    
    //Function to push an element in queue by using 2 stacks.
    //push(b) {
        // code here
        //const s1 = this.s1;
       // s1.push(b);
   // }
    
    /**
     * /
    */
   /*
    
    //Function to pop an element from queue by using 2 stacks.
    pop() {
        // code here
        const s1 = this.s1;
        const s2 = this.s2;
        
        let r = -1;
        
        while (!s1.empty()) {
            s2.push(s1.front());
            s1.pop();
        }
        
        if (!s2.empty()) {
            r = s2.front();
            s2.pop(); 
        }
        
        while (!s2.empty()) {
            s1.push(s2.front());
            s2.pop();
        }
        
        return r;
    }
}
*/
/*

class DQueNode
{
    constructor()
    {
        this.value = 0;
         this.next = null;
        this.prev = null;
    }
}

class deque
{
     // Constructor
    constructor()
    {
        this.head = this.tail=null;
    }
     
   
    isEmpty()
    {
        if (this.head == null)
            return true;
              
        return false;
    }
     
    
    size()
    {
        
        if (!this.isEmpty())
        {
            let temp = this.head;
            let len = 0;
              
            while (temp != null)
            {
                len++;
                temp = temp.next;
            }
            return len;
        }
        return 0;
    }
     
   
    insert_first(element)
    {
     
        let temp = new DQueNode();
        temp.value = element;
  
      
        if (this.head == null)
        {
            this.head = this.tail = temp;
            temp.next = temp.prev = null;
        }
        else
        {
            this.head.prev = temp;
            temp.next = this.head;
            temp.prev = null;
            this.head = temp;
        }
    }
     
    
    insert_last(element)
    {
      
        let temp = new DQueNode();
        temp.value = element;
  
    
        if (this.head == null)
        {
            this.head = this.tail = temp;
            temp.next = temp.prev = null;
        }
        else
        {
            this.tail.next = temp;
            temp.next = null;
            temp.prev = this.tail;
            this.tail = temp;
        }
    }
     
    
    remove_first()
    {
     
      
        if (!this.isEmpty())
        {
            let temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
  
            return;
        }
        document.write("List is Empty");
    }
     
 
    remove_last()
    {
        
        if (!this.isEmpty())
        {
            let temp = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
  
            return;
        }
        document.write("List is Empty");
    }
     
    
    display()
    {
        // If list is not empty
        if (!this.isEmpty())
        {
            let temp = this.head;
              
            while (temp != null)
            {
                document.write(temp.value + " ");
                temp = temp.next;
            }
  
            return;
        }
        document.write("List is Empty");
    }
}
 

class Stack
{
    constructor()
    {
        this.d= new deque();   
    }
     
    push(element)
    {
        this.d.insert_last(element);
    }
     
   
    size()
    {
        return this.d.size();
    }
     
    
    pop()
    {
        this.d.remove_last();
    }
     

    display()
    {
        this.d.display();
    }
}
*/

//Merge Without Extra Space
/*
let n = 4
let  arr1= [1, 3 ,5 ,7] 
let m = 5
let arr2 = [0 ,2,6 ,8 ,9]
let arr=[];
for(let i=0;i<n;i++){
    arr.push(arr1[i])
}

for(let i=0;i<m;i++){
    arr.push(arr2[i])
}



arr.sort((a,b)=>{
    return a-b;
})

console.log(arr)

for(let i=0;i<n;i++){
    arr1[i]=arr[i];
}
let count=0;
for(let i=m-1;i<arr.length;i++){
    arr2[count]= arr[i]
    count++;
}
console.log(arr1)
console.log(arr2)
*/
/*
let n = 4
let  arr1= [1, 3 ,5 ,7] 
let m = 5
let arr2 = [0 ,2,6 ,8 ,9]

      arr1.push.apply(arr1,arr2);
      arr1.sort((a,b)=>a-b);
      let i,j=0;
      for(i=n;i<n+m;i++){
          arr2[j]=arr1[i];
          j++;
      }
    */

      
      //{ Driver Code Starts
//Initial Template for javascript

console.log("mew")
   
