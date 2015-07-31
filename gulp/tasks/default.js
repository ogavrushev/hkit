var gulp = require('gulp'),
    config = require('../config');

gulp.task('default', ['build'], function () {
    return gulp.src(config.paths.test)
        .pipe(gulp.dest(config.paths.prod))
});