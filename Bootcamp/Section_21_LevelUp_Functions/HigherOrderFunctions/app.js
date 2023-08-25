function callTwice(fun){
    fun()
    fun()
}

function rollDie(){
    const roll = Math.floor(Math.random()*6) + 1
    console.log(roll)
}

callTwice(rollDie)

const callXTimes = function (f, x) {
    for (let i = 0; i < x; i++){
        f()
    }
}

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand> 0.5) {
        return function(){
            console.log('CONGRATS')
        }
    } else {
        return function(){
            alert('Hacked')
        }
    }
}

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max 
    }
}

// makeBetweenFunc(5,10) =

// function isBetween(num) {
//     return num >= 50 && num <= 100
// }