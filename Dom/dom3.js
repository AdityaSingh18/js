let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit',additem);

itemList.addEventListener('click',removeitem)

filter.addEventListener('keyup',filterItems);

function additem(e){
    e.preventDefault();
    console.log(1);

    let newitem= document.getElementById('item').value;
    let newitem2= document.getElementById('descip').value;
    

    let li = document.createElement('li');
    li.className= 'list-group-item';
    li.append(document.createTextNode(newitem));

    let desc = document.createElement('dd');
    desc.className='new2';
    desc.append(document.createTextNode(newitem2));
    li.append(desc);
  

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

function filterItems(e){
    let text= e.target.value.toLowerCase();
   let items= itemList.getElementsByTagName('li');



   Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    let description = item.childNodes[1].textContent;

    if(itemName.toLowerCase().indexOf(text) != -1 ||description.toLowerCase().indexOf(text)!=-1){
        item.style.display='block';

    }
    else{
        item.style.display= 'none';

    }
   });

}
