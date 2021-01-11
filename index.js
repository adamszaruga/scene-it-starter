require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 8080;
const path = require('path');
const keys = require('./configs/keys');

// app.use(cors());

app.use(bodyParser.json());

require('./models/Watchlist');
require('./utils/redis');

mongoose.connect(keys.MONGO_URI, { 
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use(express.urlencoded({
    extended: true
}));

// static files
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(express.static('public'));
// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/js'));


// templating engines
app.use(expressLayouts);
app.set('layout', './layouts/home');
app.set('view engine', 'ejs');

// set main movie routes
const movieRouter = require('./routes/routes');
app.use('/', movieRouter);

const movieWatchlist = require('./routes/watchlist');
app.use('/api', movieWatchlist);

// main listening
app.listen(PORT, () => {
    console.log('Server connected at:', PORT);
});