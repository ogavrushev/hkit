const gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    config = require('../config');

gulp.task('scripts', function() {
    browserify({
        entries: config.scripts.src,
        debug: config.env.debug
    })
    .transform("babelify").bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.scripts.dist));
});