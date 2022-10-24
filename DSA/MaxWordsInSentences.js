 let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

 var mostWordsFound = function(sentences) {
    let maxcount = 0;
   for(let i=0;i<sentences.length;i++){
       let count =0;
       for(let j=0;j<sentences[i].length;j++){
          if(sentences[i][j]==' '){
              count++;
          }
       }
       if(count>maxcount){
           maxcount=count
       }
       
       
   }
    return maxcount+1
    
};
console.log(mostWordsFound(sentences))