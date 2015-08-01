var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');
var amdOptimize = require('amd-optimize');

gulp.task('requirejs', ['test'], function() {
    return gulp.src(config.scripts.src)
        .pipe(amdOptimize("init", {
            baseUrl: 'html/js',
            configFile: 'html/js/init.js',
            paths: {
                jquery: '../bower_components/jquery/dist/jquery.min'
            }
        }))
        .pipe($.concat('init.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(config.scripts.tmp))
        .pipe($.size())
        .pipe(global.browserSync.stream());
});