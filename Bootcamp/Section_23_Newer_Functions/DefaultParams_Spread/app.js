const rollDie = (numSides = 6) => Math.floor(Math.random()*numSides)+1

const greet = (person, msg = "Hiya") => console.log(`${msg}, ${person}`)

const cats = ['Blue','Scout','Rocket']
const dogs = ['Rusty','Wyatt']

const allPets = [...cats, ...dogs]

const feline = {legs: 4, family: "Felidae"}
const canine = {legs: 4, family: "Caninae"}

