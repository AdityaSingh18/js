https://leetcode.com/problems/check-if-the-sentence-is-pangram/

let sentence = "thequickbrownfoxjumpsoverthelazydog";

var checkIfPangram = function(sentence) {
    let set2 = new Set();
for(let i=0;i<sentence.length;i++){
    set2.add(sentence[i])
}
    
    if(set2.size==26){
        return true
    }
    else{
        return false
    }
}