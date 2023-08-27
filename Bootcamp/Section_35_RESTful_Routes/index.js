const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

// Need to tell express how to parse request body
app.use(express.urlencoded( { extended: true }));
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))

let comments = [
    { id: uuidv4(), username: 'Todd', comment: 'lol' },
    { id: uuidv4(), username: 'Skyler', comment: 'I watch birds' },
    { id: uuidv4(), username: 'sk8', comment: 'Plz delete' },
    { id: uuidv4(), username: 'onlysayswoof', comment: 'woof'}
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    // const id = comments.length;
    comments.push({ id: uuidv4(), username, comment });
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    // parseInt so can use ===
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
    res.send('GET /tacos resp onse')
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body
    res.send(`OK, here are your ${qty} ${meat} tacos.`)
})

app.listen(3000, () => {
    console.log('port 3000')
})