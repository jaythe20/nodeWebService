/**
 * Created by jaythe20 on 30/03/17.
 */
var expres = require('express');
var app = expres();
var port = process.env.PORT || 3000;

var bookRouter = require('./routes/books.js');
var indexRouter = require('./routes/index.js');


//Using Router
app.use('/', indexRouter);
app.use('/api/books',bookRouter);


app.listen(port, function(){
	console.log("Running on port " +port);
});
