const gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    config = require('../config'),
    gulpif = require('gulp-if');

gulp.task('html', ['fonts'], function () {
    return gulp.src(config.markup.src)
        .pipe($.useref())
        .pipe(gulpif('**/*.js', $.uglify()))
        .pipe(gulpif('**/*.css', $.csso()))
        .pipe(gulp.dest(config.markup.tmp))
        .pipe($.size())
        .pipe(global.browserSync.stream());
});