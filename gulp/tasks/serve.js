const gulp = require('gulp'),
    config = require('../config');

gulp.task('serve', function() {
    global.browserSync.init(config.browserSync);
    gulp.watch(config.sass.all, ['sass']).on("change", global.browserSync.reload);
    gulp.watch(config.scripts.all, ['scripts']).on("change", global.browserSync.reload);
    gulp.watch(config.markup.all, ['html', 'sass']).on("change", global.browserSync.reload);
});