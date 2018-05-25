var express = require('express');
var app = express();
var path= require('path')
var routes = require('./routes')

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));







app.get('/', routes.home);
app.get('/fishFound/:fish_name', routes.fishFound);
app.get('/fishNotFound', routes.fishNotFound);





app.listen(3000, function(){
	console.log('exmaple app listening on port 3000')
})