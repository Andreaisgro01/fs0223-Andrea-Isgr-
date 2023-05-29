interface Smartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    registroChiamate: Call[];
    
    getRegistroChiamate(): void;
    filtraChiamatePerDataEOra(date:number, hour:number): void;
    ricarica(euro: number): void;
    numero404(): string;
    getNumeroChiamate(): number;
    chiamata(min: number): void;
    azzeraChiamate(): void;
  }
class Call {
    id: number;
    durata: number;
    dataOra: Date;
        constructor(id: number, durata: number, dataOra: Date) {
        this.id = id;
        this.durata = durata;
        this.dataOra = dataOra;
}
}


class Cellulare implements Smartphone{
    carica: number;
    numeroChiamate: number;
    costoMinuto: number = 0.20;
    registroChiamate: Call[] = [];
    constructor(carica: number, numeroChiamate: number){
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    getRegistroChiamate(): void {
        console.log(this.registroChiamate)
    }
    filtraChiamatePerDataEOra(date: number, hour: number): void {
        let filtra: Call[] = []
        this.registroChiamate.forEach((c: Call) =>{
            if (date == c.dataOra.getDate() && hour == c.dataOra.getHours()) {
                filtra.push(c)
            }
        })
        if (filtra.length == 0){
            console.log("non ci sono risultati")
        } else {
            console.log(filtra);
            
        }

    }
    ricarica(euro: number): void {
        this.carica += euro;
      }
    
      numero404(): string {
        return "Credito disponibile: €"+ this.carica;
      }
    
      getNumeroChiamate(): number {
        return this.numeroChiamate;
      }
    
      chiamata(min: number): void {
        const costoChiamata = min * this.costoMinuto;
        if (costoChiamata <= this.carica) {
          this.carica -= costoChiamata;
          this.numeroChiamate++;
          let recTime: Date = new Date();
          this.registroChiamate.push(new Call(this.numeroChiamate,min,recTime))
          console.log(`Chiamata di ${min} minuti effettuata.`);
        } else {
          console.log('Credito insufficiente per effettuare la chiamata.');
        }
      }
    
      azzeraChiamate(): void {
        this.numeroChiamate = 0;
      }
    }
     
    // Creazione delle istanze di Smartphone
const smartphone1 = new Cellulare(0,0);
const smartphone2 = new Cellulare(0,0);
const smartphone3 = new Cellulare(0,0);
const smartphone4 = new Cellulare(0,0);
    

    console.log(' Smartphone 1');
    smartphone1.ricarica(20);
    smartphone1.chiamata(20);
    smartphone1.chiamata(5);
    smartphone1.chiamata(8);
    smartphone1.azzeraChiamate();
    smartphone1.filtraChiamatePerDataEOra(26,16);
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

    console.log('Smartphone 4');
    smartphone4.ricarica(200);
    smartphone4.chiamata(20);
    smartphone4.chiamata(30);
    smartphone4.chiamata(50);
    console.log(smartphone4.numero404());
    smartphone4.azzeraChiamate();
    console.log('Numero chiamate', smartphone4.getNumeroChiamate());
    


