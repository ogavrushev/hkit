var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('clean', function () {
    del(['.sass-cache/**', config.dest.dest, config.dest.tmp], function (err, paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });
});
