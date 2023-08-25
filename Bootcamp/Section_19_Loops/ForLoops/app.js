// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// INCREMENT BY 1
// for(let i = 1; i < 11; i++) {
//     console.log(i)
// }

// INCREMENTING BY 2
// for(let i = 0; i < 21; i += 2){
//     console.log(i)
// }

// COUNTING DOWN
// for (let i = 100; i > -1; i-=10){
//     console.log(i)
// }

// INFINITE LOOP
// for (let i = 20; i > 0; i++){
//     console.log(i)
// }

// const animals = ['lions', 'tigers', 'bears']

// for (let i = 0; i < animals.length; i++){
//     console.log(animals[i])
// }

// for (let i = animals.length - 1; i >=0; i--){
//     console.log(i, animals[i])
// }

// for (let i = 0; i < 10; i++){
//     console.log(`i is ${i}`)
//     for (let j = 0; j < 3; j++){
//         console.log(`    j is ${j}`)
//     }
// }

const seatingChart = [
    ['Kristen','Erik','Johnny'],
    ['Geoffrey','Juanita', 'Juliette','Margaret'],
    ['Yuma', 'Sakura','Harry','Phillip']
]

for(let i = 0; i < seatingChart.length; i++){
    console.log(`Row ${i+1}:`)
    for (let j  =0; j < seatingChart[i].length; j++){
        console.log(seatingChart[i][j])
    }
}