// Build Dependencies
var autoprefix  = require('autoprefixer');
var cssnano 	= require('cssnano');
var gulp        = require('gulp');
var postcss     = require('gulp-postcss');
var pcssEach    = require('postcss-each');
var precss		= require('precss');
var rename		= require('gulp-rename');
var reporter    = require('postcss-reporter');
var stylelint   = require('stylelint');
var browserSync = require('browser-sync');

gulp.task('build', function () {
    var processors = [
        precss(),
        pcssEach(),
    	autoprefix(),
        cssnano(),
        stylelint({
            "rules": {
                "string-quotes": [2, "double"],
                "color-hex-case": [2, "lower"],
                "selector-no-id": 2
            }
        }),
        reporter({
            clearMessages: true
        })
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
	    .pipe(rename('hackCSS.min.css'))
	    .pipe(gulp.dest('./dist/css'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: './dist',
        open: false
    });
    gulp.watch('src/**/*.css', ['build']);
});

gulp.task('default', ['serve']);