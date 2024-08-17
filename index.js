const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.send("Hello APP2 - update in version 1.0.2");
});

app.get('/v1', function(req, res){
	res.send("Hello V1 from app2");
});

app.get('/v2', function(req, res){
	res.send("Hello V2 from app2");
});

app.get('/v3', function(req, res){
	res.send("Hello V3 from app2");
});
app.get('/v4', function(req, res){
	res.send("Hello V4 from app2");
});

app.listen(80,function(){
	console.log('app is running in port 80');
})
