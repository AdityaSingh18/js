let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit',additem);

itemList.addEventListener('click',removeitem)

function additem(e){
    e.preventDefault();
    console.log(1);

    let newitem= document.getElementById('item').value;

    let li = document.createElement('li');
    li.className= 'list-group-item';
    li.append(document.createTextNode(newitem));
   
let deletebtn = document.createElement('button')
deletebtn.className= 'btn btn-danger btn-sm float-right delete';
deletebtn.appendChild(document.createTextNode('X'));

li.appendChild(deletebtn);
    itemList.appendChild(li);


}

function removeitem(e){
    if(e.target.classList.contains('delete')){
       if(confirm('Are You Sure?')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
       }
    }
}
