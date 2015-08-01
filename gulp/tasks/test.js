var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    config = require('../config');

gulp.task('test', function() {
    return gulp.src('undefined')//pipe undefined files, otherwise it'll break karma configuration
        .pipe($.karma({
            configFile: 'karma.conf.js',
            action: 'run'
        })).on('error', function(err) {
            throw err;
        });
});