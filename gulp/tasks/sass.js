var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var $ = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('sass', function () {
    return sass(config.sass.src)
        .pipe($.plumber())
        .pipe($.autoprefixer('last 2 version'))
        .pipe(gulp.dest(config.sass.tmp))
        .pipe($.size())
        .pipe(global.browserSync.stream());
});