let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit',additem);

itemList.addEventListener('click',removeitem)


function additem(e){
    e.preventDefault();
    console.log(1);

    let newitem= document.getElementById('item').value;
    let newitem2= document.getElementById('descip').value;
    let newitem3 = document.getElementById('category').value
    

    let li = document.createElement('li');
    li.className= 'list-group-item';
    li.append(document.createTextNode(newitem));

    let desc = document.createElement('dd');
    desc.className='new2';
    desc.append(document.createTextNode(newitem2));
    li.append(desc);
  
    let cato = document.createElement('dd');
    cato.className='new2';
    cato.append(document.createTextNode(newitem3));
    li.append(cato);

    let editbtn = document.createElement('button');
    editbtn.className= 'btn btn-danger btn-sm float-right';
    editbtn.appendChild(document.createTextNode('Edit'));
   


let deletebtn = document.createElement('button');
deletebtn.className= 'btn btn-danger btn-sm float-right delete';
deletebtn.appendChild(document.createTextNode('X'));


li.appendChild(editbtn);
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


