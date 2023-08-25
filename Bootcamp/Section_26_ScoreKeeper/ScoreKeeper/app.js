p1 = {
    score: 0,
    button: document.querySelector('#player1'),
    display: document.querySelector('#score1')
}

p2 = {
    score: 0,
    button: document.querySelector('#player2'),
    display: document.querySelector('#score2')
}

const reset = document.querySelector('#reset')
const playto = document.querySelector('#playto')
let winningScore = 3;
let isGameOver = false

function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1
        if (player.score === winningScore){
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true
            opponent.button.disabled = true
            isGameOver = true
        }
        player.display.textContent = player.score
    }
}

p1.button.addEventListener('click', ()=> updateScores(p1,p2))
p2.button.addEventListener('click', ()=> updateScores(p2,p1))

reset.addEventListener('click', resetter)

function resetter(){
    isGameOver = false

    for (let p of [p1,p2]){
        p.display.textContent = 0
        p.score = 0
        p.display.classList.remove('has-text-success','has-text-danger')
        p.button.disabled = false
    }
}
     
playto.addEventListener('change', function(e){
    winningScore = parseInt(this.value)
    resetter()
})


//     p1.display.innerText = '0'
//     p2.display.innerText = '0'
//     p1.score = 0
//     p2.score = 0
//     p1.display.classList.remove('has-text-success','has-text-danger')
//     p2.display.classList.remove('has-text-success','has-text-danger')
//     p1.button.disabled = false
//     p2.button.disabled = false
// }

// const play1 = document.querySelector('#player1')
// const play2 = document.querySelector('#player2')
// const score1 = document.querySelector('#score1')
// const score2 = document.querySelector('#score2')
// const reset = document.querySelector('#reset')
// const playto = document.querySelector('#playto')
// let winningScore = 3;


// scoreNum1 = 0
// scoreNum2 = 0

// play1.addEventListener('click', function(){
//     if (scoreNum1 !== winningScore && !isGameOver){
//         scoreNum1 += 1
//         if (scoreNum1 === winningScore){
//             isGameOver = true
//             score1.classList.add('has-text-success')
//             score2.classList.add('has-text-danger')
//             play1.disabled = true
//             play2.disabled = true
//         }    
//         score1.textContent = scoreNum1
//     }
// })

// play2.addEventListener('click', function(){
//     if (scoreNum2 !== winningScore && !isGameOver){
//         scoreNum2 += 1
//         score2.textContent = scoreNum2  
//         if (scoreNum2 === winningScore){
//             isGameOver = true
//             score1.classList.add('has-text-danger')
//             score2.classList.add('has-text-success')
//             play1.disabled = true
//             play2.disabled = true
//         }    
//     }
// })