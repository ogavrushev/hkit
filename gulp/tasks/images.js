const gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    config = require('../config');

gulp.task('images', function () {
    return gulp.src(config.images.src)
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeViewBox: false}]
        })))
        .pipe(gulp.dest(config.images.dist))
        .pipe($.size());
});