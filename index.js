require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');

app.use(express.urlencoded({
    extended: true
}));

// static files
app.use(express.static('public'));
// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/js'));


// templating engines
app.set('views', './views');
app.set('view engine', 'ejs');

// set main movie routes
app.set('home', 'home');
const movieRouter = require('./routes/routes');
app.use('/', movieRouter)

// main listening
app.listen(PORT, () => {
    console.log('Server connected at:', PORT);
});