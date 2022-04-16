function Student() {

}

Student.prototype.sayName = function() {
    console.log(this.name)
}

function EigthGrader(name) {
    this.name = name
    this.grade = 8
}

EigthGrader.prototype = Object.create(Student.prototype)

const carl = new EigthGrader("Carl")
carl.sayName()
carl.grade