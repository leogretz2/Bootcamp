// PROMISE VERSION

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res => {
//     console.log('RESPONSE, waiting to parse', res)
//     console.log(res)
//     return res.json()
// })
// .then(data=>{
//     console.log('data parsed:', data)
//     console.log(data.ticker.price)
// })
// .catch(e=>{
//     console.log('error',e)
// })


// ASYNC FUNCTION

const fetchBitcoinPrice = async () => {
    try{
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json()
        console.log(data.ticker.price)
    } catch (e){
        console.log(e)
    }
}