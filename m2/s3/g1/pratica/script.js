//ESERCIZIO 1

class user{
    constructor(name,surname,age,location){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.location = location;
    
    }
}

ageComparison = function () {
    if(user1.age > user2.age){
        return user1.name + ' è più vecchio di ' + user2.name
    }  else if (user1.age < user2.age){
        return user1.name +  ' è più giovane di '
    + user2.name}
        else {
           return user1.name +' ha la stessa età di ' + user2.name
        }
    }

let user1 = new user('Fabio','Cavilli','37','Milano');
console.log(user1);

let user2 = new user('Luca','Guerra','37','Chieti');
console.log(user2);



console.log(ageComparison());

//ESERCIZIO 2

let petNameInputfield = document.getElementById('pet-name');
let ownerInputfield = document.getElementById('owner');
let speciesInputfield = document.getElementById('species');
let breedInputfield = document.getElementById('breed');

class pet{
    constructor(name,owner,species,breed){
        this.name = name;
        this.owner = owner;
        this.species = species;
        this.breed = breed;
    }
    static compareOwner = function(pet1,pet2){
        return pet1.owner === pet2.owner;
    }
    
}





