var express = require('express');

//hai
//helo

var app = express(); // added serve comment
var PORT = process.env.PORT || 3100; // added port comment
var middleware = require('./middleware');

app.get('/',function(req,res){
	res.send('Hello Express!');
	
});

app.use(middleware.logger); // added logger comment

// hello
app.get('/about',middleware.requireAuthetication,function(req,res){
	res.send('About Us!');
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT,function(){
	console.log('Express server started!');
});
