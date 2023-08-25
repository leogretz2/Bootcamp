const btn2 = document.querySelector('#v2')
btn2.onclick = function(){
    console.log('clicked me 2')
    console.log('hope it worked')
}

function scream(){
    console.log('ahhhhh')
    console.log('stop touching me')
}

btn2.onmouseenter = scream;

document.querySelector('h1').onclick = () => alert('cliked h1')

const btn3 = document.querySelector('#v3')

btn3.addEventListener('click', () => alert('CLICKED!'))

function twist() {
    console.log('twist')
}

function shout(){
    console.log('shout')
}

const tasButton = document.querySelector('#tas')

// Doesn't work

// tasButton.onclick = twist
// tasButton.onclick = shout

tasButton.addEventListener('click',twist, {once: true})
tasButton.addEventListener('click',shout)