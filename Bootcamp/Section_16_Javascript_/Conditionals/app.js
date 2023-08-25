let rand = Math.random()
if(rand< 0.5){
    alert('less than 0.5')
} else {
    alert('greater than or equal to 0.5')
}

let dayOfWeek = prompt('Enter a day of the week')
dayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1).toLowerCase()
alert(dayOfWeek)
if (dayOfWeek === 'Monday') {
    alert('ugh I hate Mondays')
} else if (dayOfWeek === 'Saturday'){
    alert('yay I love Saturdays')
} else if (dayOfWeek === 'Friday'){
    alert('Friday\'s are sick')
} else {
    alert('MEH')
}

// 0-5 => FREE
// 5 - 10 => CHILD $10
// 10 - 65 => ADULT $20
// 65+ => SENIOR $10

const age = Math.floor(Math.random()*100)
let price;
let bracket;
let space = ' ';

if (age < 5) {
    price = 0
    bracket = 'baby'
} else if (age < 10 || age > 64){
    price = 10
    bracket = 'child'
} else if (age < 65){
    price = 20
    bracket = 'adult'
    space = 'n '
} else {
    price = 10
    bracket = 'senior'
}
alert(`You are a${space}${bracket}. You pay $${price}.`) 

