var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;


var middleware = require('./middleware.js');

// var middleware = {

// 	requireAuth: function(req, res, next){
// 		console.log('点击事件触发');
// 		next();
// 	},
// 	logger: function(req,res,next){
// 		console.log('请求类行为： '+ new Date().toString() + ' ' + req.method + '' + req.originalUrl);
// 		next();
// 	}
// };

app.use(middleware.logger);

app.get('/About', middleware.requireAuth, function(req, res){

	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Express start at '+ PORT + '!');
});
