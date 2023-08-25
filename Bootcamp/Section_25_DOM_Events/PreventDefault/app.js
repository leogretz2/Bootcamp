const form = document.querySelector('#form1')
const input = document.querySelector('#catName')
const cats = document.querySelector('#cats')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const catName = input.value
    const newLI = document.createElement('LI')
    newLI.innerText = catName
    cats.append(newLI)
    input.value = ''
})


