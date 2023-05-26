var Call = /** @class */ (function () {
    function Call(id, durata, dataOra) {
        this.id = id;
        this.durata = durata;
        this.dataOra = dataOra;
    }
    return Call;
}());
var Cellulare = /** @class */ (function () {
    function Cellulare(carica, numeroChiamate) {
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    Cellulare.prototype.getRegistroChiamate = function () {
        console.log(this.registroChiamate);
    };
    Cellulare.prototype.filtraChiamatePerDataEOra = function (date, hour) {
        var filtra = [];
        this.registroChiamate.forEach(function (c) {
            if (date == c.dataOra.getDate() && hour == c.dataOra.getHours()) {
                filtra.push(c);
            }
        });
        if (filtra.length == 0) {
            console.log("non ci sono risultati");
        }
        else {
            console.log(filtra);
        }
    };
    Cellulare.prototype.ricarica = function (euro) {
        this.carica += euro;
    };
    Cellulare.prototype.numero404 = function () {
        return "Credito disponibile: €" + this.carica;
    };
    Cellulare.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Cellulare.prototype.chiamata = function (min) {
        var costoChiamata = min * this.costoMinuto;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            var recTime = new Date();
            this.registroChiamate.push(new Call(this.numeroChiamate, min, recTime));
            console.log("Chiamata di ".concat(min, " minuti effettuata."));
        }
        else {
            console.log('Credito insufficiente per effettuare la chiamata.');
        }
    };
    Cellulare.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Cellulare;
}());
// Creazione delle istanze di Smartphone
var smartphone1 = new Cellulare(0, 0);
var smartphone2 = new Cellulare(0, 0);
var smartphone3 = new Cellulare(0, 0);
console.log(' Smartphone 1');
smartphone1.ricarica(20);
smartphone1.chiamata(20);
smartphone1.chiamata(5);
smartphone1.chiamata(8);
smartphone1.azzeraChiamate();
smartphone1.filtraChiamatePerDataEOra(26, 16);
console.log(smartphone1.getNumeroChiamate());
smartphone1.getRegistroChiamate();
console.log('Smartphone 2');
smartphone2.ricarica(2);
console.log(smartphone2.numero404());
console.log('Numero chiamate:', smartphone2.getNumeroChiamate());
smartphone2.chiamata(1);
console.log(smartphone2.numero404());
console.log('Numero chiamate:', smartphone2.getNumeroChiamate());
smartphone2.azzeraChiamate();
console.log('Numero chiamate:', smartphone2.getNumeroChiamate());
console.log('Smartphone 3');
smartphone3.ricarica(2);
console.log(smartphone3.numero404());
console.log('Numero chiamate:', smartphone3.getNumeroChiamate());
smartphone3.chiamata(30);
console.log(smartphone3.numero404());
console.log('Numero chiamate:', smartphone3.getNumeroChiamate());
smartphone3.azzeraChiamate();
console.log('Numero chiamate:', smartphone3.getNumeroChiamate());
