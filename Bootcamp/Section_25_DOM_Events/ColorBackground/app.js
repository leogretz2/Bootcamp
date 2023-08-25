const btn = document.querySelector('#ch')
// const body = document.querySelector('#body')
const h1 = document.querySelector('h1')

btn.addEventListener('click', function (){
    const newColor = makeRandColor()
    document.body.style.backgroundColor = `rgb${newColor}`
    h1.innerText = `RGB: ${newColor}`
})

const makeRandColor = () => {
    const c1 = Math.floor(Math.random()*255)
    const c2 = Math.floor(Math.random()*255)
    const c3 = Math.floor(Math.random()*255)
    return `(${c1},${c2},${c3})`
}