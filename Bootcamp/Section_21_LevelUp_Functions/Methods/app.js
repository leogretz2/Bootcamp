const myMath = {
    PI: 3.14159,
    square (num) {
        return num * num;
    },
    cube (num) {
        return num ** 3;
    }
}

const cat = {
    catName: 'Blue Steele',
    catColor: 'grey',
    catBreed: 'scottish fold',
    meow() {
        console.log(`${this.catName} says MEOW MEOW MEOW and she is ${this.catColor}`)
    }
}

window.catName = "Blue Steele 2"
window.catColor = 'grey 2'
const meow2 = cat.meow;