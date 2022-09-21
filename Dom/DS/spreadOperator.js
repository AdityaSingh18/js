const obj1 = {
    Key1: 'value1',
    key2: 'value2'
}

const obj2 = {...obj1,Key1:'value100',key3:'value3'}

console.log(obj2);



const arr1 =[1,2];
const arr2=[3,4];

const arr3= [...arr1,...arr2];

console.log(arr3);