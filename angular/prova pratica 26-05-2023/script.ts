interface Smartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    
    ricarica(euro: number): void;
    numero404(): string;
    getNumeroChiamate(): number;
    chiamata(min: number): void;
    azzeraChiamate(): void;
  }

  class Cellulare implements Smartphone{
    carica: number;
    numeroChiamate: number;
    costoMinuto: number = 0.20;
    constructor(carica: number, numeroChiamate: number){
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        
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
    
    console.log(' Smartphone 1');
smartphone1.ricarica(5);
console.log(smartphone1.numero404());
console.log('Numero chiamate:', smartphone1.getNumeroChiamate());
smartphone1.chiamata(18);
console.log(smartphone1.numero404());
console.log('Numero chiamate:', smartphone1.getNumeroChiamate());
smartphone1.azzeraChiamate();
console.log('Numero chiamate:', smartphone1.getNumeroChiamate());

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
  

