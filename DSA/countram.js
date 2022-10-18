const fun =(arr)=>{
    var count=0;
    return () => {
        console.log('hello'+arr[count])
        count++;
    }
}
const name = fun(['ram','shyam']);

name();
name();