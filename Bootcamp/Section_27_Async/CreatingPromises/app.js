const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if(rand < 0.7) {
                resolve('fake data')
            }
            reject('erRro')
        }, 1000)
    })
}

fakeRequest('/dogs/1')
.then((data) => {
    console.log('done w request: ', data)
})
.catch((err)=> {
    console.log('ya fucked it: ', err)
})

const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor
            resolve()
        }, delay)
    })
}

delayedColorChange('red', 1000)
.then(()=> delayedColorChange('orange', 1000))
.then(()=> delayedColorChange('yellow', 1000))
.then(()=> delayedColorChange('green', 1000))
.then(()=> delayedColorChange('blue', 1000))
.then(()=> delayedColorChange('violet', 1000))

