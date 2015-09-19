// Build Dependencies
var gulp        = require('gulp');
var postcss     = require('gulp-postcss');
var scsslint 	= require('gulp-scss-lint');
var cssnano 	= require('cssnano');
var precss		= require('precss');


gulp.task('lint', function () {
  return gulp.src('/src/*.css')
    .pipe(scsslint());
});

gulp.task('build', ['lint'], function () {
    var processors = 
   	[
    	cssnano(),
    	precss()
    ];
    return gulp.src('./src/*.css')
	    .pipe(postcss(processors))
	    .pipe(gulp.dest('./dest/css'));
});

gulp.task('default', ['build']);