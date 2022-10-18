// https://leetcode.com/problems/reverse-linked-list/discuss/2510152/Easiest-way-to-reverse-Linked-List-explained-with-Images

var reverseList = function(head) {
    let p =null;
    let c = head ;
   
    
    while(c){
        let n = c.next //next
        c.next =p;  //reverse link and break link between c and n
        p=c;  // move p
        c=n;  // move c
     
    }
    return p;
};