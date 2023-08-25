const exams = [90, 83, 45, 66, 79, 400, 93, 85, 88]

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

const ev = exams.every(score => score >= 75)
const some = exams.some(score => score >= 75)

const after2015 = movies.some(movie => movie.year > 2015)