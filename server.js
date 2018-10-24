var express = require('express');

var app = express();
var PORT = process.env.PORT || 3100;
var middleware = require('./middleware');

app.get('/',function(req,res){
	res.send('Hello Express!');
});

app.use(middleware.logger); // added logger comment

app.get('/about',middleware.requireAuthetication,function(req,res){
	res.send('About Us!');
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT,function(){
	console.log('Express server started!');
});
