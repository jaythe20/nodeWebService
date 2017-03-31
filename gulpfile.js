/**
 * Created by jaythe20 on 30/03/17.
 */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function () {
	nodemon({
		script: 'app.js',
		ext: 'js',
		env : {
			PORT: 8000
		},
		ignore: ['./node_modules/**']
	})
		.on('restart', function(){
			console.log("Restarting..");
		});
});