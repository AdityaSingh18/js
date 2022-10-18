class Solution {
    
    rowWithMax1s(arr, n, m){
        let max =0;
        let row = -1;
     for(let i =0;i<n;i++){
         let rowmax= 0;
         for(let j=0;j<m;j++){
             if(arr[i][j]==1){
                 rowmax++;
             }
             
             if(rowmax>max){
                 max=rowmax;
                 row=i;
             }
         }
     }
     return row;
    }
    
}