var t = 10;

var n = 2;

console.log(n + t);
var risulato = (n + t);

console.log(risulato);


var misura = prompt('inserisci misura');

if ( misura >= 100 && misura <= 1000){
    document.write('misura corretta');
}

else if ( misura <= 100) {
    document.write('misura nulla');
    location.href = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fst2.depositphotos.com%2F2704315%2F7774%2Fv%2F950%2Fdepositphotos_77740172-stock-illustration-yellow-tape-measure-in-inches.jpg&tbnid=LQlTUaIhAJ3d5M&vet=12ahUKEwivjLWa7I3-AhUGnCcCHX1wA3AQMygCegUIARCbAg..i&imgrefurl=https%3A%2F%2Fit.depositphotos.com%2Fvector-images%2Fmetro-sarta.html&docid=3qfIxY4kmjYDcM&w=1023&h=866&q=metro&hl=it&ved=2ahUKEwivjLWa7I3-AhUGnCcCHX1wA3AQMygCegUIARCbAg'
}
else{
    document.write('misura esagerata');
}








