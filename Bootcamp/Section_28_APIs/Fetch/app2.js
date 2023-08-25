// FETCH W PROMISE 2

// fetch("https://swapi.dev/api/people/1/")
// .then((res) => {
//     console.log("resolve", res);
//     return res.json()
// })
// .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
// })
// .then(res => {
//     console.log("second resolve");
//     return res.json();
// })
// .then((data)=> {
//     console.log(data);
// })  
// .catch((e)=> {
//     console.log("error", e);
// });



// FETCH ASYNC FUNCTION 2
// can refactor and make new smaller function

const loadStarWarsPeople = async () => {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);

    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
}

loadStarWarsPeople();