const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.send("Hello APP2");
});

app.get('/v1', function(req, res){
	res.send("Hello V1 from app2");
});

app.get('/v2', function(req, res){
	res.send("Hello V2 from app2");
});


app.listen(80,function(){
	console.log('app is running in port 80');
})
