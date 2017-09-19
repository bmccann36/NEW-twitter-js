const routes = require('./routes');
const express = require('express');
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks')

app.use('/', routes);


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

app.get('/stylesheets/style.css', function(req, res) {
    res.sendFile('/public/stylesheets/style.css')
})

app.listen(3000, function() {
    console.log('ex 3000')
})


