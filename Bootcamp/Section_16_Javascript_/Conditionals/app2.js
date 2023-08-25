// password is 6+ characters and has no spaces

let password = prompt('Enter a password')
if (password.length < 6) {
    alert('Enter longer')
} else {
    if (password.indexOf(' ') !== -1){
        alert('No spaces allowed')
    } else {
        alert('Password set')
    }
}