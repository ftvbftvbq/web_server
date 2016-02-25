var middleware = {

	requireAuth: function(req, res, next){
		console.log('点击事件触发');
		next();
	},
	logger: function(req,res,next){
		console.log('请求类行为： '+ new Date().toString() + ' ' + req.method + '' + req.originalUrl);
		next();
	}
};


module.exports = middleware;