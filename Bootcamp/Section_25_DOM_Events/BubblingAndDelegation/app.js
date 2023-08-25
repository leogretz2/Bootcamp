const changer = document.querySelector('#changer')
const container1 = document.querySelector('#container')

changer.addEventListener('click', function(e){
    container1.style.backgroundColor = makeRandColor();
    e.stopPropagation();
})

container1.addEventListener('click',function(){
    container1.classList.add('hide')
})

const makeRandColor = () => {
    const c1 = Math.floor(Math.random()*255)
    const c2 = Math.floor(Math.random()*255)
    const c3 = Math.floor(Math.random()*255)
    return `rgb(${c1},${c2},${c3})`
}