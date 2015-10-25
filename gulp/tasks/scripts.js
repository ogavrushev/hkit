var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var config = require('../config');

gulp.task('scripts', function() {
    browserify({
        entries: config.scripts.src,
        debug: !gulp.env.production
    })
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(config.scripts.tmp));
});