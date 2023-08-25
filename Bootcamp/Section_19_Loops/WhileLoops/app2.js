let maximum = parseInt(prompt("Enter a maximum number"))
while(!maximum){
    maximum = parseInt(prompt("No, enter a valid number"))
}
let ans = Math.ceil(Math.random()*maximum)
guess = prompt("Guess a number")
count = 0
quit = false
while(parseInt(guess) !== ans){
    if (guess === 'q') {
        quit = true
        break;
    }
    count++
    if(guess > maximum){
        guess = parseInt(prompt("Dude, you entered a number higher than your maximum. What the heck? Enter again."))
    }
    else if (guess > ans ){
        guess = prompt("Too high, guess again")
    }
    else if (guess < ans){
        guess = prompt("Too low, guess again")
    }
    else {
        guess = ans
    }
}
if (quit){
    alert(`You quit :( you guessed ${count} times.`)
} else {
    alert(`You got it right! It took you ${count} guesses.`)
}
