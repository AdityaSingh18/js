/*const ab = document.querySelector('.items');

ab.children[0].textContent= 'Hello';
ab.children[0].style.background = 'green';

ab.children[1].style.background = 'yellow';
ab.children[2].innerText = 'Brad';
*/
/*
const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const userList= document.querySelector('#users');

myform.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();

    console.log(nameInput.value);
}
*/
const btn = document.querySelector('.btn');

btn.addEventListener('click',onclick);
 function onclick(e){
    e.preventDefault();
    document.querySelector('#my-form').style.background='red';
    
}

btn.addEventListener('mouseover',onover);
function onover(f){

document.querySelector('body').style.background='blue';
}

btn.addEventListener('mouseout',onout);
function onout(g){

document.querySelector('body').style.background='green';
}

const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const userList= document.querySelector('#users');

myform.addEventListener('submit',onsubmit);

function onsubmit(h){
    h.preventDefault();
if(nameInput.value===''||emailInput.value===''){
alert('please enter fields');
    
}
else{
    console.log(nameInput.value);
    console.log(emailInput.value);
}
}