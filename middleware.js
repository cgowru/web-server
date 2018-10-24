module.exports = {
	requireAuthetication: function(req,res,next){
		console.log('private route hit!');
		next();// will got to next middlewaare method and it is necessary
	},
	logger:function(req,res,next) {
		console.log('Request '+new Date().toString()+' : '+req.method +' '+req.originalUrl);
		next();
	}
}
