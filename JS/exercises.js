let firstName = "Carlos";
let lastName = "Stevenson";
let currentYear = 1965;
let birthYear = 1948;
let greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (currentYear - birthYear) + " years old.";
console.log(greeting)


function favoriteAnimal(animal) {
    console.log(animal + " is my favorite animal!");
}

favoriteAnimal("Goat")

function add7(number) {
    console.log(number + 7);
}
add7(15)

function multiply(x, y) {
    console.log(x * y);
}
multiply(3, 2)

function capitalize(word) {
    const word2 = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(word2);
}
capitalize("something")
capitalize("BoTh")
capitalize("UPPERCASE")

function lastLetter(letter) {
    let length = letter.length;
    let arg = length - 1;
    const finalLetter = letter.charAt(arg);
    console.log(finalLetter)
}
lastLetter("abcd")
lastLetter("Paulo")
lastLetter("Sarah")