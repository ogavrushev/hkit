const gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    fileinclude = require('gulp-file-include'),
    config = require('../config'),
    gulpif = require('gulp-if');

gulp.task('html', ['fonts'], function () {
    return gulp.src(config.markup.src)
        .pipe(fileinclude())
        .pipe($.useref())
        .pipe(gulpif('**/*.js', $.uglify()))
        .pipe(gulpif('**/*.css', $.csso()))
        .pipe(gulp.dest(config.markup.dist))
        .pipe($.size())
        .pipe(global.browserSync.stream());
});