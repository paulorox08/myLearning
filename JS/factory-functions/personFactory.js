const personFactory = (name, age) => {
    const sayHello = () => console.log('hello');
    return (name, age, sayHello);
}

const jeff = personFactory('Jeff', 27);
console.log(jeff.name);
jeff.sayHello();

///
const name = "Paulo";
const color = "red";
const number = 34;
const food = "rice";

console.log(name,color,number,food); //Paulo, red, 34, rice
console.log({name,color,number,food}) //name: Paulo, color: red, number: 34, food: rice