/**
 * Created by jaythe20 on 30/03/17.
 */
var expres = require('express');
var port = process.env.PORT || 3000;

var app = expres();

app.get("/", function(req,res){

	res.send("Welcome to My API Hola");
});

app.listen(port, function(){
	console.log("Running on port " +port);
});