const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.send("Hello APP2 - update in version 1.0.3");
});


app.listen(80,function(){
	console.log('app is running in port 80');
})
