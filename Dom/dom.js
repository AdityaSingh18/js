console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title= 123;
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent ='Hello';
console.log(document.forms);
console.log(document.links);
console.log(document.images)
let headerTitle= document.getElementById('main-header');
headerTitle.style.borderBottom= 'solid 3px #000';
let add_item = document.getElementById('add');
add_item.style.color='green';
add_item.style.fontWeight='bold';
let items = document.getElementsByClassName('list-group-item');
/*items[1].textContent='hello 2';
items[2].textContent='hello 3';
for(let i=0;i<items.length;i++){
    items[i].style.background='green';
    items[i].style.fontWeight='bold';
}
*/
/*task6
let tagname = document.getElementsByTagName('li');
tagname[1].textContent='hello 2';
tagname[2].textContent='hello 3';

for(let i=0;i<items.length;i++){
    tagname[i].style.background='green';
    tagname[i].style.fontWeight='bold';
}
*/

//task 7 query selector
/*
let querysel= document.querySelector('.list-group-item:nth-child(2)');
querysel.style.backgroundColor='green';
let querysel2= document.querySelector('.list-group-item:nth-child(3)');
querysel2.style.visibility='hidden';
*/
let queryselectall =document.querySelectorAll('li');
//queryselectall[1].style.background='green';

let odd = document.querySelectorAll('li:nth-child(odd)')
for(let i=0;i<odd.length;i++){
    odd[i].style.background='green';
}