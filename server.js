var express = require('express');

var app = express();

// app.get('/',function(req,res){
// 	res.send('Hello Express!');
// });

var middleware = {
	requireAuthetication: function(req,res,next){
		console.log('private route hit!');
		next();
	},
	logger:function(req,res,next) {
		console.log('Request @'+new Date().toString()+' : '+req.method +' '+req.originalUrl);
		next();
	}
}

app.use(middleware.logger);

app.get('/about',middleware.requireAuthetication,function(req,res){
	res.send('About Us!');
});

app.use(express.static(__dirname+'/public'));

console.log(__dirname);
app.listen(3000,function(){
	console.log('Express server started!');
});