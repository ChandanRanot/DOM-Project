var form = document.getElementById('addForm');
var list = document.getElementById('items');
var search = document.getElementById('searchItem');

form.addEventListener('submit', addItem);
list.addEventListener('click', deleteItem);
search.addEventListener('keyup', searchItem);


function addItem(event){
    event.preventDefault();
    
    var item = document.getElementById('itemValue').value;
    var li = document.createElement('li');

    li.className = 'list-item';
    li.textContent = item;

    var delButton = document.createElement('button');

    delButton.className = 'btn delete';
    delButton.textContent = 'X';
    li.appendChild(delButton);

    list.appendChild(li);

}

function deleteItem(event){
    if(event.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = event.target.parentElement;
            list.removeChild(li);
        }
    }
}

function searchItem(event){
    var text = event.target.value.toLowerCase();
    var itemList = list.getElementsByTagName('li');

    Array.from(itemList).forEach((item)=>{
        var itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'flex';
        }
        else{
            item.style.display = 'none';
        }
    })
}