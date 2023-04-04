/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* i ptincipali datatype in js sono:
    -stringa: indica una sequenza di caratteri, ottima per comunicare tramite testo anche se possiamo inserire valori numerici, viene indicata tramite '' o "";
    -numero: indica un valore numerico intero o decimale;
    -booleani: incano un valore che come risposta darà true o false;
    -undefinded: indica una variabile non definita;
    -Null:  indica un valore null, ovvero non trova nulla in quanto il valore non è stato definito;
    -oggetti: Gli oggetti in JavaScript sono entità flessibili e dinamiche. Possiamo definire un oggetto come un contenitore di proprietà;
    */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Andrea"; 
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/;




let a = 12;
let b = 20;
console.log(a + b) ;
console.log(12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
 name = "Isgrò";
console.log(name)
const NO_ASSIGNMENT = 200;
//let NO_ASSIGNMENT = 120;
console.log(NO_ASSIGNMENT);



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);
console.log(name1.toLocaleLowerCase() === name2.toLocaleLowerCase());


