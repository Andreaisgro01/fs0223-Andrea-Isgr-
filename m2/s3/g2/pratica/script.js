
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

let seconds = sessionStorage.getItem("timer") || 0;

const timerElement = document.getElementById("timer2");

function displayTimer() {
  seconds++;
  timerElement.textContent = seconds;
  sessionStorage.setItem("timer", seconds);
}

const timer = setInterval(displayTimer, 1000);



