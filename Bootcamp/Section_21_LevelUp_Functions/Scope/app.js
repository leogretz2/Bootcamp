// function collectEggs() {
//     let totalEggs = 6;
// }

// // don't have access to totalEggs
// collectEggs();
// console.log(totalEggs)

// let bird = 'Scarlet Macaw'
// function birdWatch(){
//     let bird = 'Great Blue Heron'
//     console.log(bird)
// }

// birdWatch()

// let radius = 8
// if (radius > 0){
//     const PI = 3.14159
//     let msg = 'HIII'
// }

// console.log(radius)
// console.log(msg)

function bankRobbery(){
    const heroes= ['Spiderman', 'Wolverine', 'Black Panther', 'Captain America']
    function cryForHelp(){
        console.log(cryForHelp)
        function inner(){
            for (let hero of heroes){
                console.log(`PLEASE HELP US ${hero}!!`)
            }
        }
        inner();
    }
    cryForHelp();
}