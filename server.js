var express = require('express');
var ejs = require('ejs');
var app = express();

app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/frontend/build/');

app.use(express.static('frontend/build'));

require('./backend/routes/routes')(app);

app.get('/', function (req, res) {
    res.render('index');
});

app.listen('1337', function() {
    console.log('Server started!');
});