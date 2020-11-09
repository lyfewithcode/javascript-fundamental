var person = {
    firstName: "Maudy",
    lastName: "Ayunda",
    age: 21,
    walk(){
        return "I am walking"
    }
}

console.log(person.walk()); //dot
console.log(person['firstName']); //mirip array
console.log(person['firstName'], person['lastName']);