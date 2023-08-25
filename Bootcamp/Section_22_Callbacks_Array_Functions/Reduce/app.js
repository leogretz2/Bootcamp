const prices = [9.99,1.50,19.99,49.99,30.50]

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

// calculate total
const total = prices.reduce((accumulator, current) => accumulator + current)

// return minimum
const mini = prices.reduce((accumulator, current) => Math.min(accumulator, current))

// return highest rated movie
const highestRate = movies.reduce((accumulator, current) => {
    if (current.score > accumulator.score){
        return current
    }
    return accumulator
})

const evens = [2,4,6,8]
const evS = evens.reduce((total, current) => total + current, 40)