/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area (l1, l2){
    return l1*l2;
}

console.log(area(5, 6));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due neri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
 USO METODO HUBS DI MATH*/

function crazySum(a, b){
    if (a === b)
    return (a+b)*3;
    else
    return a+b;
    
}
console.log(crazySum(2,4))
    

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un nero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il nero fornito sia maggiore di 19.
*/

function crazyDiff(n){
    if (n < 20)
    return (n - 19) ; 
    else 
    return (n - 19)*3;
}
console.log(crazyDiff(100));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un nero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if (n >= 20 && n <= 100)
    return true;
    else
    return false;
}
console.log(boundary(28));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str){
    if (str.includes ("EPICODE"))
    return str;
    else 
    return str + "EPICODE";
}
console.log(epify("EPICODE "));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/


function check3and7(n){
  if (n % 3 ==0  || n % 7 == 0 )
  return true;
  else 
  return false;
}
 console.log(check3and7(12));
 console.log(check3and7(13));
 console.log(check3and7(14));




/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reeverseString(str){
    return str.split("").reverse().join("");
}
console.log(reeverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str){
   let wordsarray = str.split(" ");//divido tra loro le parole dove c'è lo spazio
   let capitalizedWords= [];//creo array vuoto che restituisco a fine funzione
   for (let word of wordsarray) {//ciclo l'array
    let firstLetter = word[0].toUpperCase();//ottengo la prima lettera della parola che sto ciclando e la metto in maiuscolo
    let parolaSenzaIniziale = word.slice(1);//prelevo la sottostringa della parola,contenente tutti i caratteri a partire dal secondo (compreso)
    word = firstLetter + word.slice(1);//concateno iniziale maiuscola col resto della parola
    capitalizedWords.push(word);//metto nel nuovo array la parola modificata
   } 
   
   return capitalizedWords.join(" ");
}
let risultato = upperFirst('La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa');

console.log(risultato);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(str){
  return str.slice(1, str.length-1);  
}
console.log(cutString('il panda è a rischio estinzione'));



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(arr,n){
    let random = [...arr].sort(() => Math.random() - 0.5); 
    return random.slice(0,n);
}
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(giveMeRandom(arr,5));