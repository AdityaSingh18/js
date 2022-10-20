/*
var maxProfit = function(prices) {
    min =prices[0]
    minindex= 0;
   for(let i=1;i<prices.length;i++){
       if(prices[i]<min){
           min= prices[i]
           minindex= i;
       }
   }
    let maxsum=0;
    for(let i=minindex+1;i<prices.length-1;i++){
       let submaxsum= prices[i]-prices[minindex]
           if(submaxsum>maxsum){
               maxsum=submaxsum;
           }
       } 
    return maxsum
    }
    */

    var maxProfit = function(prices) {
        min =prices[0]
        minindex= 0;
       for(let i=1;i<prices.length;i++){
           if(prices[i]<min){
               min= prices[i]
               minindex= i;
           }
       }
        let maxsum=0;
        for(let i=minindex;i<prices.length;i++){
           let submaxsum= prices[i+1]-prices[minindex]
               if(submaxsum>maxsum){
                   maxsum=submaxsum;
               }
           } 
        return maxsum
        }

        let prices=
        [2,4,1]
        console.log(maxProfit(prices))
