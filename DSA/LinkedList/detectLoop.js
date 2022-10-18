class Solution {
    //Function to check if the linked list has a loop.
    detectLoop(head)
    {
       let p1 = head;
       let p2 = head
       
       while(p2!=null && p2.next!=null){
           p1 = p1.next;
           p2=p2.next.next;
           
           if(p1==p2){
               return true
           }
           
       }
       return false
    }
    
}