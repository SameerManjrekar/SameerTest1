var exp = require('express');
var app = exp();
//For Middleware in express use keyword Use

app.use(exp.static(__dirname + '/public'));

//app.get('/',function(req,res){	
//	res.write("Hello sameer node js sample");
//	res.end();
//});

app.get('/players/:name/:lang',function(req,res){
	res.write("Name = " + req.params.name);
	res.end("  Language = " + req.params.lang);
});

var port = process.env.npm_package_config_port || 1234;

app.listen(port,function(){
	console.log("tis sever is listening on port " + port);
});