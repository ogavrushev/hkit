var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var config = require('../config');

gulp.task('scripts', function() {
    browserify({
        entries: config.scripts.src,
        debug: config.env.debug
    })
    .transform(babelify.configure({
        presets: ["es2015"]
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.scripts.tmp));
});