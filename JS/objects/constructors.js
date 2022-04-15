function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
        console.log(name)
    }
}

const player = new Player('Steve', 'X')
console.log(player.name) //Steve

const player2 = new Player('Paulo', 'X')
player2.sayName() //Paulo