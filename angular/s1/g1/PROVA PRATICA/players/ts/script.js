var player1 = 40;
var player2 = 55;
var playerNumbers = function (a, b) {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    if (a == randomNumber) {
        console.log('Il primo giocaotre ha indovinato il numero casuale');
    }
    else if (b == randomNumber) {
        console.log('il secondo giocaotre ha indovinato il numero casuale');
    }
    else {
        if (Math.abs(a - randomNumber) < Math.abs(b - randomNumber)) {
            console.log('Nessuno ha indovinato il numero ma il primo si è avvicinato di più');
        }
        else if (Math.abs(b - randomNumber) < Math.abs(a - randomNumber)) {
            console.log('Nessuno ha indovinato il numero ma il secondo si è avvicinato di più');
        }
    }
};
console.log(playerNumbers(2, 1));
