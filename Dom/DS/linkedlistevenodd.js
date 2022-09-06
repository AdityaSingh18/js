

class Solution {
  divide(N,head){
    //code here
    let even = null
    let odd = null
    let current = head
    let next = null
    let evenCurrent = null
    let oddCurrent = null
    while(current){
        next = current.next
        if(current.data % 2 == 0){
            if(even == null){
                even = current
            }
            else{
                evenCurrent.next = current
            }
            evenCurrent = current
            evenCurrent.next = null
        }
        else{
            if(odd == null){
                odd = current
            }
            else{
                oddCurrent.next = current
            }
            oddCurrent = current
            oddCurrent.next = null
        }
        current = next
    }
    if(evenCurrent){
        evenCurrent.next = odd
    }
    else{
        even = odd
    }
    return even
  }
}

