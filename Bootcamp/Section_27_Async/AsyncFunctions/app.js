// async function hello() {

// }

// const sing = async () => {
//     throw new Error("UHOH ")
//     return 'LA LA LA'
// }

// sing()
//     .then((data) => {
//         console.log(`promise resolve with ${data}`)
//     })
//     .catch(err => {
//         console.log('promise rejected')
//     })

const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials"
    if (password === 'corgifeet') return 'Welcome'
    throw 'Invalid password'
}

login('adsf','corgifeet')
    .then(msg => {
        console.log('logged in')
        console.log(msg)
    })
    .catch(err => {
        console.log('Error')
        console.log(err)
    })


const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor
            resolve()
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "All done."
}

//// EXPLICITLY USE PROMISES

// rainbow().then((msg)=> console.log(msg))
// rainbow().then(()=> console.log('end of rainbow'))

async function printRainbow() {
    await rainbow();
    console.log('end of rainbow2')
}


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

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('page1')
        let data2 = await fakeRequest('page2')
        console.log(data1)
    } catch(e) {
        console.log('caught error')
        console.log('error: ', e)
    }
}

try{

} catch(e) {
    console.log('its ok', e)
}