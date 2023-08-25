let count = 0
while(count<10){
    count++;
    console.log(count)
}

const SECRET = "Babyhippo"
i = 0
guess = ''
while(guess !== SECRET){
    guess += SECRET[i]
    console.log(guess)
    i++
}

let input = prompt("Say something!")
while(true){
    input = prompt(input)
    if (input.toLowerCase() === "stop copying me") break;
}

alert("OKAY YOU WIN")