const express = require('express')

const app = express()
// console.dir(app)

// app.use((req, res) => {
//     console.log("got a request")

//     // Can respond with whatever, puts that on the webpage
//     res.send("got request, here's response")
//     res.send({color: 'red'})

//     // Can use html
//     res.send('<h1>This is header</h1>')
// })

// Routing
app.get('/', (req,res) => {
    res.send('Welcome to thine home page')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId/:other', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Req.params: ${req.params}</h1>`)
    console.log(req)
    console.log(req.params)
})

app.get('/search', (req, res) => {
    const {q} = req.query;
    const { a } = req.query;
    if (!q || !a) {
        res.send('<h1>Nothing found if invalid search.</h1>')
    }
    res.send(`<h1>Search results for ${q}, ${a}</h1>`)
})

app.post('/cats', (req,res) => {
    res.send("MEOW, different")
})

app.get('/cats', (req,res) => {
    res.send("MEOW")
})

app.get('/dogs', (req,res) => {
    res.send("WOOF")
})

app.get('*', (req,res) => {
    res.send("Invalid route") 
})

app.listen(8080, () => {
    console.log("listening on 8080")
})