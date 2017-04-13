/**
 * Created by jaythe20 on 30/03/17.
 */
var expres = require('express');
var app = expres();
var port = process.env.PORT || 3000;
var bookRouter = require('./routes/books.js');
var indexRouter = require('./routes/index.js');

//Creeating Router
/*var bookRouter = expres.Router();
bookRouter.route('/books')
	.get(function (req, res) {
	var JsonResponse = { 'Hello' : 'This is book api'};
	res.json(JsonResponse);
});*/

//Using Router
app.use('/', indexRouter);
app.use('/api/books',bookRouter);


//Basic Routing -- Without Router
/*app.get("/", function(req,res){
	res.send("Welcome to My API");
});*/

app.listen(port, function(){
	console.log("Running on port " +port);
});
