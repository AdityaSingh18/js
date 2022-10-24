/*https://leetcode.com/problems/reverse-words-in-a-string/


return s.split(' ').filter(str=>str).reverse().join(' ')
*/

let s= 'the sky is blue';
let splitArray = s.split(' ');
let reversedStr = '';

for (let i = splitArray.length - 1; i >= 0; i--) {
    if (splitArray[i] != '') {
       if(reversedStr.length > 0){
            reversedStr += ' ';
      }
        
        reversedStr += splitArray[i];
   }
}

console.log(reversedStr);00