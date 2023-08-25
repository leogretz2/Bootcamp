scores = [923556,842345,693455,435234,245534]

// sorted then high = 0, second = 1
const highScore = scores[0]
const secondScore = scores[1]

const [gold, silver, bronze, ...rest] = scores


// Destructuring with Objects -> much more common

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American',
    city: 'San Francisco',
    state: 'California',
}

const user2 = {
    email: 'Satacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma',
}

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 20005
    },
    {
        title: 'Going on 40',
        score: 9,
        year: 2000
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 2013
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2004
    },
    {
        title: 'Alien',
        score: 90,
        year: 4000
    }
]
// const firstName = user.firstName
// const lastName = user.lastName
// const email = user.email

// const { email: email2, bio, firstName, lastName, city} = user

// const { born: birthYear, died: deathYear = 'N/A'} = user

// const {city, state, sdied = 'N/A'} = user2


// have to refer to object each time
function fullName (user) {
    return `${user.firstName} ${user.lastName}`
}

// explicitly destructure from input user
function fullName2 (user) {
    const { firstName, lastName } = user
    return `${firstName} ${lastName}`
}

// assume object input and destructure params
function fullName3({firstName, lastName}) {
    return `${firstName} ${lastName}`
}

// can use default value too
function fullName4({firstName, lasName = "dingus"}) {
    return `${firstName} ${lasName}`
}

// Movies stuff

goodMovies = movies.filter(movie => movie.score >= 90)
goodMovies2 = movies.filter(({ score }) => score >= 90)

const display = movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})

const display2 = movies.map(({year, title, score}) => {
    return `${title} (${year}) is rated ${score}`
})