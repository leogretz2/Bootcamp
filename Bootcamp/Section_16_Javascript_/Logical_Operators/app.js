const password = prompt("Enter your password")

if (password.length >= 6 && password.indexOf(' ') === -1){
    alert("Password set")
} else {
    alert("Incorrect format for password")
}

// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

const age = prompt("What's your age?")
let price;

if ((age >= 0 && age < 5) || age >= 65) {
    price = 'FREE'
} else if (age >= 5 && age < 10){
    price = '$10'
} else if (age >= 10 && age < 65){
    price = '$20'
} else {
    alert("Age needs to be a positive number, what the heck?")
    price = 'nonexistent'
}

alert(`This guy's ticket is: ${price}`)


const firstName = prompt("Enter first name")

if (!firstName) {
    firstName = prompt("Try again")
}

if (!((age >= 0 && age < 5) || age >= 65)) {
    alert("You are not a baby or a senior ^")
}