let myForm = document.getElementById("myForm");
let myFormButton = document.
querySelector("#myForm button");

//gestendo submit sul form
myForm.addEventListener("submit", function (e) {
    e.preventDefault();//chiede se un evento ha un funzionamrnto di default e lo blocca es.(a) 
    console.log('inviato');
})


//gestendo il click sul button
myFormButton.addEventListener('click', function (e) {
    e.preventDefault()

let nome = document.querySelector( '#myForm input[name="nome"]' );
let cognome = document.querySelector( '#myForm input[name="cognome"]' );
let email = document.querySelector( '#myForm input[name="email"]' );
let password = document.querySelector( '#myForm input[name="psw"]' );

let valid = true;

if (nome.value ==""){
    console.log('il campo nome vuoto');
    nome.style.border = "1px solid red";
    nome.nextElementSibling.textContent = `Devi inserire il${nome.placeholder}`;
    valid = false;
}

if (cognome.value ==""){
    console.log('il campo cognome vuoto');
    nome.style.border = "1px solid red";
    nome.nextElementSibling.textContent = "Devi riempire questo campo";
    valid = false;
}
if (email.value ==""){
    console.log('il campo email vuoto');
    nome.style.border = "1px solid red";
    nome.nextElementSibling.textContent = "Devi riempire questo campo";
    valid = false;
}
if (password.value ==""){
    console.log('il campo password è vuoto');
    nome.style.border = "1px solid red";
    nome.nextElementSibling.textContent = "Devi riempire questo campo";
    valid = false;
}
if (valid){
    //codice che invia i dati al server
    console.log('inviato');
}
})

myFormButton.addEventListener('click', function (e) {
    let onOff = document.querySelector( ' input[type="password"]' );
    password.type = password.type === "password" ? "text" : "password";
})