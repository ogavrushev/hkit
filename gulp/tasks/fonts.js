var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('fonts', function () {
    return gulp.src(config.fonts.src)
        .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe(gulp.dest(config.fonts.tmp))
        .pipe(gulp.dest(config.fonts.dest))
        .pipe($.size());
});