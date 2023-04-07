/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish']
 
//   console.log(pets)
 
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

//console.log(pets.sort())

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

//console.log(pets.reverse())

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

// pets.shift('dog');
// pets.push('dog');
// console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
//metodo 1
// cars.forEach(function (cars) {
//     cars.licensePlate = '';
//   });
//     console.log(cars)
//metodo 2
// for (i = 0; i < cars.length; i++) {
//     cars[i].licensePlate = 'ASERGO04' + 1;
//}
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

//  let newCar = {
//     brand: 'Peugeot',
//     model: '204',
//     color: 'red',
//     trims: ['allure', 'GT']
// }
// cars.push(newCar);

// for ( i = 0; i < cars.length; i++) {
//     cars[i].trims.pop();
//     console.log(cars[i]);
// }

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

 const justTrims = []

//     for (i = 0; i < cars.length; i++) {
//         if (cars[i].trims.length > 0) {
//             justTrims.push(cars[i].trims[0])
//         }
//     }
//     console.log(justTrims)


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
//  for (q = 0; q < cars.length; q++) {
//      if (cars[q].color.startsWith('b')) {
//          console.log('Fizz');
//      } else {
//          console.log('Buzz');
//      }
// }
    //  ESERCIZIO 9
    // Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.

 const numericArray = [
   6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
 ]
//  for(n = 0; numericArray[n] !=32; n++){
//     console.log(numericArray[n]);
//   }

 
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]

// let n = 0
// for (n =  0; n < charactersArray.length; n++) 
// switch(charactersArray[n]) {
//     case 'g': 
//          console.log(7);
//          break;
//     case 'n':
//         console.log(12);
//         break;
//     case 'u':
//         console.log(19);
//         break;
//     case 'z':
//         console.log(21);
//         break;
//     case 'd':
//         console.log(4);
//         break;
//}