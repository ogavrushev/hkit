var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');
var revReplace = require('gulp-rev-replace');

gulp.task('html', ['sass', 'fonts'], function () {
    var jsFilter = $.filter('**/*.js'),
        cssFilter = $.filter('**/*.css'),
        assets = $.useref.assets();

    return gulp.src(config.markup.src)
        .pipe(assets)
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.preprocess())
        .pipe(gulp.dest(config.dest.tmp))
        .pipe(gulp.dest(config.dest.dest))
        .pipe($.size());
});