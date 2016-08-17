var person = {
    name: 'Jerome',
    age: 46

}
var personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(typeof personJSON);


var personObject = JSON.parse(personJSON);
console.log(personObject);
console.log(typeof personObject);

console.log("CHALLENGE AREA");

var animal = '{"name": "Halley"}';


// convert to js object
var animalObject = JSON.parse(animal);
console.log(animalObject);
console.log(typeof animalObject);

// add age prop
animalObject.age = 3;
console.log(animalObject);
console.log(typeof animalObject);

// convert back to JSON
var animalJSON = JSON.stringify(animalObject);
console.log(animalJSON);
console.log(typeof animalJSON );

//Log out

