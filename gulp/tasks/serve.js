var gulp = require('gulp'),
    config = require('../config'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('serve', ['build'],  function() {
    browserSync.init({
        server: [
            config.dest.src,
            config.dest.tmp
        ]
    });

    gulp.watch(config.sass.tmp, ['sass'], reload);
    gulp.watch(config.scripts.src, reload);
    gulp.watch(config.dest.tmp + '/*.html', ['markup'], reload);
});