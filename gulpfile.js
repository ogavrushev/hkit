'use strict';
var BUILD_ROOT = 'dist',
    WEB_ROOT = 'html';

var gulp = require('gulp'),
    env = require('config.json')('./env.json'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    sass = require('gulp-ruby-sass'),
    fileInclude = require('gulp-file-include');

var config = {
    sass: {
        src:  WEB_ROOT + '/css/app.scss',
        dest: BUILD_ROOT + '/css'
    },
    images: {
        src:  WEB_ROOT + '/images/**/*',
        dest: BUILD_ROOT + '/images'
    },
    fonts: {
        src:  [
            'html/bower_components/font-awesome/fonts/fontawesome-webfont.*',
            'html/bower_components/open-sans-fontface/fonts/**'
        ],
        dest: BUILD_ROOT + '/font'
    }
};

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('sass', function () {
    return sass(config.sass.src)
        .pipe($.plumber())
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp/css'))
        .pipe($.size());
});

gulp.task('images', function () {
    return gulp.src(config.images.src)
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        }))) //due to conflicts in freebsd
        .pipe(gulp.dest(config.images.dest))
        .pipe($.size());
});

gulp.task('fonts', function () {
    return gulp.src(config.fonts.src)
        .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe(gulp.dest(config.fonts.dest))
        .pipe($.size());
});

/*gulp.task('scripts', function () {
    return gulp.src(config.js.src)
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe($.size());
});*/

gulp.task('html', ['sass', 'fonts'], function () {
    var jsFilter = $.filter('**/*.js'),
        cssFilter = $.filter('**/*.css'),
        assets = $.useref.assets();

    return gulp.src(WEB_ROOT + '/*.html')
        .pipe(assets)
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest(BUILD_ROOT))
        .pipe($.size());
});