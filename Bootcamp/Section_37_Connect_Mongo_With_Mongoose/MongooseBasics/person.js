const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("Connection open")
    })
    .catch(err => {
        console.log('error')
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').
    get(function() { return `${this.first} ${this.last}`}).
    set(function(v){
        this.name.first = v.substr(0, v.indexOf(' '));
        this.name.last = v.substr(v.indexOf(' ') + 1);
})

personSchema.pre('save', async function () {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log('about to save')
})

personSchema.post('save', async function () {
    console.log('saved')
})

const Person = mongoose.model('Person', personSchema);