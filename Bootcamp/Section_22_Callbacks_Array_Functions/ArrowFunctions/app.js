const numbers = [1,2,3,4,5,6,7,8,9,10]

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const add = (x,y) => {
    return x+y;
}

const square = (x) => {
    return x**2;
}

// classic return
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

//implicit return

const rollDie2 = () => (
    Math.floor(Math.random() *6 ) + 1
)

const add2 = (x,y) => x+y

// newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score/10}`
// })

newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score/10}`
))

const obj2 = {
    firstName: 'Leo',
    lastName: 'Gretzinger',
    fullName () {
        return `${this.firstName} ${this.lastName}`
    }
}