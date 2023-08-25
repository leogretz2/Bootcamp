try {
    hello.toUpperCase()
} catch {
    console.log('error')
}


function yell (msg) {
    try {
        console.log(msg.toUpperCase().repeat(3))
    } catch (e){
        console.log(e)
    }
}