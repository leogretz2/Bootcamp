//// CALLBACK HELL

// fakeRequestCallback('books.com/page1', 
//     function(response) {
//         console.log('IT WORKED: ', response)
//         fakeRequestCallback('books.com/page2',
//             function(response) {
//                 console.log('IT WORKED AGAIN: ', response)
//                 fakeRequestCallback('books.com/page3',
//                     function(response) {
//                         console.log('IT WORKED AGAIN3: ', response)
//                     },
//                     function(err) {
//                         console.log('Error3: ', err);
//                     }
//                 )
//             },
//             function(err) {
//                 console.log('Error2: ', err);
//             }
//         )
//     }, function(err) {
//         console.log('ERROr: ', err)
//     })

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random()*(4500)) + 500;
        setTimeout(()=> {
            if(delay>4000){
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('worked (page1)!')
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(()=> {
//                 console.log('worked (page 2)!')
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                 .then(() => {
//                     console.log('worked (page3)!')
//                 })
//                 .catch(()=> {
//                     console.log('errRor 3')
//                 })
//         })
//         .catch(()=> {
//             console.log('errRor 2')
//         })
//     })
//     .catch(()=> {
//         console.log('errRor')
//     })

fakeRequestPromise('yelp.com/api/coffee/page1')
.then((data) => {
    console.log('worked (page1)!')
    console.log(data)
    return fakeRequestPromise('yelp.com/api/coffee/page2')
})
.then((data) => {
    console.log('worked (page2)!')
    console.log(data)
    return fakeRequestPromise('yelp.com/api/coffee/page3')
})
.then((data) => {
    console.log('worked (page3)!')
    console.log(data)
})
.catch((err) => {
    console.log('a request failed')
    console.log(err)
})
