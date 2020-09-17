// configuration
const dotenv = require('dotenv');
const express = require('express');
const hbs = require('hbs');
const path = require('path');
dotenv.config();
const app = express();


// Static configurations
app.use(express.static('public'));
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use('/img', express.static('public/img'));


//HBS
hbs.registerPartials('./views/parciales');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// Route HOME
app.get('/', function (req, res) {
    res.render('index');
});


// RUN server
app.listen(process.env.PORT || 3000, () => {
    console.log(`[Escuchando peticiones en el puerto: ${process.env.PORT}]`);
    console.log(`[v${process.env.npm_package_version}]`);
});