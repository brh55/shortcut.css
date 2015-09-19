// Build Dependencies
var autoprefix	= require('gulp-autoprefixer');
var autoprefix  = require('autoprefixer');
var concatCSS	= require('gulp-concat-css');
var cssnano 	= require('cssnano');
var gulp        = require('gulp');
var postcss     = require('gulp-postcss');
var precss		= require('precss');
var rename		= require('gulp-rename');
var scsslint 	= require('gulp-scss-lint');

gulp.task('lint', function () {
  return gulp.src('/src/*.css')
    .pipe(scsslint({
    	'config': '.scss-lint.yml'
    }))
    .pipe(scsslint.failReporter());
});

gulp.task('build', ['lint'], function () {
    var processors = 
   	[
    	precss(),
    	cssnano(),
    	autoprefix()
    ];
    return gulp.src('./src/*.css')
	    .pipe(postcss(processors))
	    .pipe(concatCSS('bundle.css'))
	    .pipe(rename('hackCSS.min.css'))
	    .pipe(gulp.dest('./dest/css'));
});

gulp.task('default', ['build']);