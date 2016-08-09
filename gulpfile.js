// Load plugins
var gulp = require('gulp'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),   
    path = require('path'),
    uglify = require('gulp-uglify');

// Styles
gulp.task('less', function () {
  return gulp.src('./less/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});


// Watch
gulp.task('default',["less"], function() {

    // Watch less files
    gulp.watch('./less/**/*', function(event) {
      gulp.run('less');
    });

});