axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res=> {
        console.log(res.data.ticker.price)
    })
    .catch(e=>{
        console.log(e)
    })

const fetchBitcoinPrice = async() => {
    try {
        const prom = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(prom.data.ticker.price)
    } catch(e) {
        console.log('error: ', e)
    }
}

const jokes = document.querySelector('#jokes')

const getDadJoke = async () => {
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    const newLI = document.createElement('LI')
    newLI.append(res.data.joke)
    jokes.append(newLI)
}