var gulp = require('gulp'),
    config = require('../config'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('serve', ['build'], function() {
    browserSync.init({
        server: [
            config.dest.tmp
        ]
    });

    gulp.watch(config.sass.all, ['sass'], reload);
    gulp.watch(config.scripts.src, ['requirejs'], reload);
    gulp.watch(config.markup.src, ['html'], reload);
});