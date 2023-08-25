const person = {
    firstName: 'Viggo',
    lastName: 'Mortenson',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this)
            console.log(this.fullName())
        }, 3000)
    }
}