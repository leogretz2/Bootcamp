console.log('Sending request to server')
setTimeout(() => {
    console.log('here\'s your data')
}, 3000)

console.log('at end')


//// REPETITIVE
// setTimeout(()=>{
//     document.body.style.backgroundColor='red'
// },1000);
// setTimeout(()=>{
//     document.body.style.backgroundColor='orange'
// },2000);

// setTimeout(()=>{
//     document.body.style.backgroundColor='yellow'
// },3000);


// document.body.style.backgroundColor='orange'


//// NESTED AS SHIT

// setTimeout(()=>{
//     document.body.style.backgroundColor='red'
//     setTimeout(()=>{
//         document.body.style.backgroundColor='orange'
//         setTimeout(()=>{
//             document.body.style.backgroundColor='yellow'
//             setTimeout(()=>{
//                 document.body.style.backgroundColor='green'
//                 setTimeout(()=>{
//                     document.body.style.backgroundColor='blue'
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);


//// WITH CALLBACKS
const delayColor = (newColor, delay, doNext) => {
    setTimeout(()=> {
        document.body.style.backgroundColor = newColor
        doNext && doNext()
    }, delay)
}

delayColor('red',1000, ()=>{
    delayColor('orange',1000, ()=> {
        delayColor('yellow', 1000, ()=>{
            delayColor('green',1000, ()=> {
                delayColor('blue',1000, ()=> {

                })
            })
        })
    })
})