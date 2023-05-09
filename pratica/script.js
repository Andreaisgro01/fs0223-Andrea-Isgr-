
//input
const nameField = document.querySelector('input');
//buttons
const saveButton = document.getElementById('saveButton');
const deleteButton = document.getElementById('deleteButton');
//paragraph
const lastName = document.getElementById('target');
//names array
let names = [];

//function save
saveButton.addEventListener('click',save);

function save(e){
    e.preventDefault();
    localStorage.setItem('Names', JSON.stringify(names));
    names.push(nameField.value);
    localStorage.setItem('Names', JSON.stringify(names));
    lastName.textContent = names [names.length - 1];
    document.getElementsByTagName('form').reset();
}

//function delete
deleteButton.addEventListener('click',cancel);

function cancel(){
    let names = JSON.parse(localStorage.getItem('Names'));
    names.pop();
    localStorage.setItems('Names',JSON.stringify(names));
    lastName.textContent = names[names.length-1];
}



