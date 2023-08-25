const numbers = [1,2,3,4,5,6,7,8,9,10]

four = numbers.filter(num => (num === 4))

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

goodMovies = movies.filter(movie => movie.score > 80)
futureMovies = movies.filter(movie => movie.year > 2021)
goodTitles = goodMovies.map(movie => movie.title)

// smoother

goodTitles2 = movies.filter(movie => movie.score > 80).map(movie => movie.title)
