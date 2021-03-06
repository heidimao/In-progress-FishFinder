var express = require('express');
var app = express();
var path= require('path');
var routes = require('./routes');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })



app.get('/', routes.home);
app.post('/fishFound', urlencodedParser, routes.find)

app.get('/fishFound/:fishname', urlencodedParser, routes.fishFound);







app.listen(3000, function(){
	console.log('exmaple app listening on port 3000')
});