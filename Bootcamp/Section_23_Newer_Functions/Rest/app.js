// function sum() {
//     return arguments.reduce((total, current) => total + current)
// }

// gets all the arguments as an array
function sum(...nums) {
    return nums.reduce((total, el) => total+el)
}

function raceResults(gold, silver, ...eelse) {
    console.log(`Gold medal: ${gold}`)
    console.log(`Silver medal: ${silver}`)
    console.log(`Thanks to: ${eelse}`)
}