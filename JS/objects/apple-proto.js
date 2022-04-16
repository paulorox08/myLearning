function Apple(colour, weight) {
    this.colour = colour;
    this.weight = weight;
}

Apple.prototype.eat = function() {
    if (this.weight > 20) {
        return "You can eat this apple!"
    }
    else {
        return "Do not eat this apple!"
    }
}

Apple.prototype.throw = function() {
    if (this.colour == "red" || this.colour == "green") {
        return "Keep this apple"
    }
    else {
        return "Throw away"
    }
}

const apple1 = new Apple("red", 30);
const apple2 = new Apple("yellow", 40);
const apple3 = new Apple("green", 15);
const apple4 = new Apple("green", 10);
const apple5 = new Apple("blue", 25);
const apple6 = new Apple("black", 35);