//task 7

//parentelement
let itemlist = document.querySelector('#items');
 itemlist.parentElement.style.background='green';
console.log(itemlist.parentElement.parentElement.parentElement)

//firstchild

console.log(itemlist.firstChild);

//firstelementchild
itemlist.firstElementChild.textContent='Hello 1'

//lastchild
console.log(itemlist.lastChild);

//lastelementchild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='hello 4'

//next sibling
console.log(itemlist.nextSibling);//nextelement sibling

//next element sibling
console.log(itemlist.nextElementSibling);

//previousSibling
console.log(itemlist.previousSibling);

//previouselementsibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = 'red'

//create element
let newDiv =document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';

newDiv.setAttribute('title','hello Div');
console.log(newDiv);

//textnode

let newdivtext = document.createTextNode('Hello World');

newDiv.appendChild(newdivtext);

let container = document.querySelector('header .container');
let h1= document.querySelector('header h1');
container.insertBefore(newDiv,h1);



/*

let div = document.createElement('div');
div.className='hello1';
newDiv.id= 'hello2';

div.setAttribute('li','hello div2');
console.log(div);

let divtext= document.createTextNode('hello world2');
div.appendChild(divtext);
*/

let newcontainer = document.getElementById('items');
newcontainer.innerHTML= '<li>Hello world</li>'+newcontainer.innerHTML;
//let item1 = container.getElementsB('new');
//newcontainer.appendChild(div);
//newcontainer.insertBefore(div,item1);