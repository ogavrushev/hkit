const gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    $ = require('gulp-load-plugins')(),
    config = require('../config');

gulp.task('sass', function () {
    return sass(config.sass.src)
        .pipe($.plumber())
        .pipe($.autoprefixer('last 2 version'))
        .pipe(gulp.dest(config.sass.tmp))
        .pipe($.size())
        .pipe(global.browserSync.stream());
});