const gulp = require('gulp'),
    env = require('../../env'),
    config = require('../config');

gulp.task('serve', function() {
    global.browserSync.init(Object.assign({}, config.env, {
        browser: ['google chrome'],
        server: {
            baseDir: config.markup.dist
        },
        reloadDelay: config.env.browserSyncDelay
    }));

    gulp.watch(config.sass.all, ['sass']).on("change", global.browserSync.reload);
    gulp.watch(config.scripts.all, ['scripts']).on("change", global.browserSync.reload);
    gulp.watch(config.markup.all, ['html', 'sass']).on("change", global.browserSync.reload);
});