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
