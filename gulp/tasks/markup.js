var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('markup', function () {
    return gulp.src(config.markup.src)
        .pipe($.preprocess())
        .pipe(gulp.dest(config.dest.tmp))
        .pipe(gulp.dest(config.dest.dest))
        .pipe($.size());
});