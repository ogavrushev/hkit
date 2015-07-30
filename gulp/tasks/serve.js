var gulp = require('gulp'),
    config = require('../config');

gulp.task('serve', ['build'], function() {
    global.browserSync.init({
        server: {
            baseDir: config.dest.tmp
        }
    });

    gulp.watch(config.sass.all, ['sass']).on("change", global.browserSync.reload);
    gulp.watch(config.scripts.src, ['requirejs']).on("change", global.browserSync.reload);
    gulp.watch(config.markup.src, ['html']).on("change", global.browserSync.reload);
});