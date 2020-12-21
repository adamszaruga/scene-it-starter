require('dotenv').config()
const express = require('express');
const app = express();
const ejs = require('ejs');
const PORT = process.env.PORT || 8080;
const path = require('path');
const routes = require("./routes/routes");

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/js'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use('/', routes);

app.listen(PORT, () => {
    console.log('Server connected at:', PORT);
});