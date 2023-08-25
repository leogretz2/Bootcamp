// const baseLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
const baseLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const container = document.querySelector('.container')
for (let i = 0; i < 898; i++) {
    const link = `${baseLink}${i+1}.png`
    const div = document.createElement('div')
    div.classList.add('pokemon')
    const poke = document.createElement('img')
    poke.src = link
    const num = document.createElement('span')
    num.innerText =`#${i+1}`
    div.append(poke, num)
    container.append(div)
}