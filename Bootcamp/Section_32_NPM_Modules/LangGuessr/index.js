const franc = require('franc')
const langs = require('langs')
const colors = require('colors')

input = process.argv.slice(2)[0];

// const langCode = franc('Alle menslike wesens word vry')
const langCode = franc(input)

const language = langs.where("3",langCode)

let name;

try {
    name = language.name
    console.log(`Our best guess is: ${name.green}`)
} catch(err){
    console.error("Didn't work".red)
    // name = "Bad input".red
}
