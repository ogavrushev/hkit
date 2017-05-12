const gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    config = require('../config');

gulp.task('fonts', function () {
    return gulp.src(config.fonts.src)
        .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe(gulp.dest(config.fonts.dist))
        .pipe($.size());
});