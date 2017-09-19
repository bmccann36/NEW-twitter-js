const express = require('express');
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks')
const modules = require('./routes')
// let news = ''
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     // console.log(output);
// });

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

var myLogger = function(req, res, next) {
    console.log('LOGGED')
    next()
}

app.use(myLogger)


const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.get('/', function(req, res) {
    // res.send('hello world')

    res.render( 'index', {title: 'Hall of Fame', people: people} );
})

app.get('/news', function(req, res) {
    res.send('this is news')
})

app.listen(3000, function() {
    console.log('ex 3000')
})
