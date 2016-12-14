const gulp = require('gulp'),
    del = require('del'),
    $ = require('gulp-load-plugins')(),
    config = require('../config');

gulp.task('clean', function (done) {
    del(['.sass-cache/**', config.paths.test]).then(paths => {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });

    return $.cache.clearAll(done);
});
