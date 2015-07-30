var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var $ = require('gulp-load-plugins')();
var config = require('../config');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
    return sass(config.sass.src)
        .pipe($.plumber())
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest(config.sass.tmp))
        .pipe(gulp.dest(config.sass.dest))
        .pipe(browserSync.stream())
        .pipe($.size());
});