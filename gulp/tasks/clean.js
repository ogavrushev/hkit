var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('clean', function (done) {
    del(['.sass-cache/**', config.paths.test], function (err, paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });

    return $.cache.clearAll(done);
});
