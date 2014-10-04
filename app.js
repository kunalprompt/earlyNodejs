
var express = require('express');
var app = express();

var path = require('path');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
	res.render('index.html', { name: "Kunal Sharma" });
});

var server = app.listen(3000, function(){
	console.log('Listening to port %d', server.address().port);
});