const jokes = require('give-me-a-joke')
const colors = require('colors')
const cowsay = require('cowsay')

// console.log(jokes)

// cowsay.say('hello')

jokes.getRandomDadJoke(function(joke) {
    console.log(joke.rainbow)
})