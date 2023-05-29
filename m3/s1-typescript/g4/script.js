"use strict";
class Dresses {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getsaldocapo() {
        return (this.prezzoivainclusa * this.saldo) / 100;
    }
    getacquistocapo() {
        return this.prezzoivainclusa - this.getsaldocapo();
    }
}
fetch("Abbigliamento.json")
    .then((res) => {
    if (res.ok) {
        return res.json();
    }
    else {
        throw new Error("Errore nella fetch");
    }
})
    .then((data) => {
    let nuovoArray = [];
    data.forEach((element) => {
        let nuovoCapo = new Dresses(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
        nuovoArray.push(nuovoCapo);
    });
    console.log(nuovoArray);
    let firstPrice = nuovoArray[0].getacquistocapo();
    console.log("price is " + firstPrice + "€");
    let secondPrice = nuovoArray[1].getacquistocapo();
    console.log("price is " + secondPrice + "€");
    let thirdPrice = nuovoArray[2].getacquistocapo();
    console.log("price is " + thirdPrice + "€");
})
    .catch((err) => console.log(err));
