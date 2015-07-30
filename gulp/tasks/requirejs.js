var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');
var amdOptimize = require('amd-optimize');

gulp.task('requirejs', function() {
    return gulp.src(config.scripts.src)
        .pipe(amdOptimize("init", {
            baseUrl: 'html/js',
            configFile: 'html/js/init.js',
            paths: {
                jquery: '../bower_components/jquery/dist/jquery.min'
            }
        }))
        .pipe(gulp.dest(config.scripts.tmp))
        .pipe($.uglify())
        .pipe(gulp.dest(config.scripts.dest))
        .pipe($.size());
});