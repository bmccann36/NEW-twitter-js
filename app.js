const express = require('express');
const app = express(); // creates an instance of an express application

// let news = ''

var myLogger = function(req, res, next) {
    console.log('LOGGED')
    next()
}

app.use(myLogger)

app.get('/', function(req, res) {
    res.send('hello world')
})

app.get('/news', function(req, res) {
    res.send('this is news')
})

app.listen(3000, function() {
    console.log('ex 3000')
})