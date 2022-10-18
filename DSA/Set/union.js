class Solution {
    //Function to return the count of number of elements in union of two arrays.
    doUnion(a, n, b, m){
        // code here
         //using set to store the elements.
        let s1 = new Set();
        let count = 0;
        
        //we insert all the elements of first array in set.
    	for(let i=0;i<n;i++)
    		s1.add(a[i]);
        
        //we insert all the elements of second array in set.
	    //Set does not contain duplicates.
    	for(let i=0;i<m;i++)
    	    s1.add(b[i]);
    	    
    	//returning the size of set which is total number of elements in set.
    	return s1.size;
    }
    
}