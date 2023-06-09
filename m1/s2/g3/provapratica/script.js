/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
{
  let a1 = 5;
  let a2 = 9;

  if (a1 > a2) {
    console.log("Il più grande è : ");
    console.log(a1);
    console.log("Il più piccolo è : ");
    console.log(a2);
  } else {
    console.log("Il più grande è : ");
    console.log(a2);
    console.log("Il più piccolo è : ");
    console.log(a1);
  }
}

/* SCRIVI QUI LA TUA RISPOSTA 
Il più grande è : 
9
Il più piccolo è : 
5*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero 
  fornito è diverso da 5.
*/

{
  // let numeroDaInserire = prompt("Inserisci numero");
  let numeroDaInserire = 5;

  if (numeroDaInserire != 5) {
    console.log("not equal");
  } else {
    console.log("are equal");
  }

}
/* SCRIVI QUI LA TUA RISPOSTA 
se inserisco un numero uguale a 5 compare are equal
se inserisco un numero divero a 5 compare not equal  */


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero 
  fornito è perfettamente divisibile per 5 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)

*/

{
  let num1 = 6;

  if (num1 % 5 == 0) {
    console.log("Il numero è divisibile per 5");
  } else {
    console.log("Il numero  non è divisibile per 5");
  }

}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, 
  il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione 
  sia uguale a 8.

*/

{
  let a1 = 7;
  let a2 = 1;

  if (a1 == 8 || a2 == 8) {
    console.log("C'è almeno un numero uguale a otto");
  }

  if ((a1 + a2) == 8) {
    console.log("La somma dei due numeri è uguale a 8")
  }

  // la sottrazione non è commutativa
  if ((a1 - a2) == 8) {
    console.log("La differenza dei due numeri è uguale a 8")
  } else if ((a2 - a1) == 8) {
    console.log("La differenza dei due numeri è uguale a 8")
  }

}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del 
  carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha 
  diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso 
    pari a 10).Crea un algoritmo che determini l'ammontare totale che deve essere 
    addebitato all'utente per il checkout.
*/


{
  let totalShoppingCart = 31;

  if (totalShoppingCart > 50) {
    console.log("Checkout" + totalShoppingCart);

  } else {
    console.log("La tua spesa è di" + '' + totalShoppingCart);
    console.log("Il costo di spedizione è di 10");
    totalShoppingCart += 10;
    console.log("Checkout" + totalShoppingCart);
  }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il black Friday e viene applicato 
  il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, 
  determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il 
  totale.
*/

{
  let totalShoppingCart = 31;
  // variabile sconto che calcola il black Friday
  let sconto = totalShoppingCart * 0.8;


  if (sconto > 50) {
    console.log("Checkout" + sconto);

  } else {
    console.log("La tua spesa è di" + '' + sconto);
    console.log("Il costo di spedizione è di 10");
    sconto += 10;
    console.log("Checkout" + sconto);
  }
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo 
  il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

{

  
  console.log("--------------------------");
  let array = [45, 20, 34];
  array.sort(function(a,b){
    return a - b;
  });
  array.reverse();
  console.log(array);
  console.log("--------------------------");
}


{
  let a = 30;
  let b = 19;
  let c = 27;

  if (a > b && b > c) {
    console.log(a, b, c);
  } else if (a > c && c > b) {
    console.log(a, c, b);
  } else if (b > a && a > c) {
    console.log(b, a, c);
  } else if (b > c && c > a) {
    console.log(b, c, a);
  } else if (c > a && a > b) {
    console.log(c, a, b);
  } else if (c > b && b > a) {
    console.log(c, b, a);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero
  oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

{
  let a1 = 12;
  let a2 = 'sasso';
  let a3 = true;

  console.log(typeof (a1));
  console.log(typeof (a2));
  console.log(typeof (a3));
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

{
  let pari = 6;
  let dispari = 5;

  if (pari % 2 == 0) {
    console.log("Il numero è pari");
  } else {
    console.log("Il numero  non è pari");
  }

  if (dispari % 2 != 0) {
    console.log("Il numero è dispari");
  } else {
    console.log("Il numero non dispari ");
  }
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio 
  corretto in ogni circostanza.

  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
{let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else  {
      console.log("Uguale a 10 o maggiore");
    }
  }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", 
  il cui valore sarà "Toronto".
*/
{
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city='Toronto';
//prototype viene usato per modificare i costruttori
console.log(me);
}


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per 
  rimuovere la proprietà "lastName".
*/
{
  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  
  delete me.lastName;
 
  console.log(me);
  }

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per
   rimuovere Sl'ultimo elemento della proprietà "skills".
*/
{
  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  
  me.skills.pop();
 
  // me.skills.splice(1, 2); limit test
  console.log(me);
  }


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo 
  successivamente con i numeri da 1 a 10.
*/
{
let arr = []

/*
arr.push(1);
console.log(arr);
abiamo provato il metodo push su un singolo elemento per poi andare ad applicarlo
agli altri elementi dell'esercizio 
*/
arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr);
}

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, 
  con il valore 100.
*/
/* ovviamente potremmo sostituire l'ultimo elemento dell'array, ovvero il valore 10, con
il 100. Però poi miche ci picchia.
*/
{
  let prova = []
  prova.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  prova.pop();
  prova.push(100);
  console.log(prova);
}






  

