const lis = document.querySelectorAll('li')
const postB = document.querySelector('#post')
const usernameI = document.querySelector('#user')
const textI = document.querySelector('#text')
const tweets = document.querySelector('#tweets')
const tweetForm = document.querySelector('#tweetForm')


tweets.addEventListener('click',function(e){
    e.target.nodeNAME === 'li' && e.target.remove()
})

tweetForm.addEventListener('submit', function(e){
    e.preventDefault();
    addTweet(usernameI.value, textI.value)
    usernameI.value = ''
    textI.value = ''
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li')
    const newUser = document.createElement('b')
    newUser.innerText = `${username}`
    newTweet.append(newUser)
    newTweet.append(` - ${tweet}`)
    tweets.append(newTweet)
}