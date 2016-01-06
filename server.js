var express = require('express');

var app = express();

var middleware = require('./middleware');

// app.get('/',function(req,res){
// 	res.send('Hello Express!');
// });

app.use(middleware.logger);

app.get('/about',middleware.requireAuthetication,function(req,res){
	res.send('About Us!');
});

app.use(express.static(__dirname+'/public'));

console.log(__dirname);
app.listen(3000,function(){
	console.log('Express server started!');
});