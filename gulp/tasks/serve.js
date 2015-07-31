var gulp = require('gulp'),
    config = require('../config');

gulp.task('serve', function() {
    global.browserSync.init({
        server: {
            baseDir: config.markup.tmp
        },
        reloadDelay: 1000
    });

    gulp.watch(config.sass.all, ['sass']).on("change", global.browserSync.reload);
    gulp.watch(config.scripts.src, ['requirejs']).on("change", global.browserSync.reload);
    gulp.watch(config.markup.all, ['html']).on("change", global.browserSync.reload);
});