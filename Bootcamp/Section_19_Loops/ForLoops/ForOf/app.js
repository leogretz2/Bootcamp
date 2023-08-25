const subreddits = ['cringe','books','chickens','funny','pics','soccer','games','art','artists','aristocrats','garbage']

const seatingChart = [
    ['Kristen','Erik','Johnny'],
    ['Geoffrey','Juanita', 'Juliette','Margaret'],
    ['Yuma', 'Sakura','Harry','Phillip']
]

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// for(let i = 0; i< subreddits.length; i++){
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`)
}

for (let row of seatingChart){
    for (let student of row){
        console.log(student)
    }
}

for (let char of "This is the string"){
    console.log(char)
}

for (let person in testScores){
    console.log(`${person} got a ${testScores[person]}`)
}

// sum up all the scores

let total = 0

for (let student of Object.keys(testScores)){
    total += testScores[student]
}

alert(total/Object.keys(testScores).length)