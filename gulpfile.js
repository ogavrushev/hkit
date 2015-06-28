'use strict';
var BUILD_ROOT = 'dist',
    WEB_ROOT = 'html';

var gulp = require('gulp'),
    env = require('config.json')('./env.json'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    amdOptimize = require('amd-optimize'),
    del = require('del'),
    sass = require('gulp-ruby-sass');

var config = {
    sass: {
        src:  WEB_ROOT + '/css/app.sass',
        dest: BUILD_ROOT + '/css'
    },
    scripts: {
        src:  WEB_ROOT + '/js/**/*.js',
        dest: BUILD_ROOT + '/js'
    },
    images: {
        src:  WEB_ROOT + '/img/**/*',
        dest: BUILD_ROOT + '/img'
    },
    fonts: {
        src: 'html/css/fonts/**',
        dest: BUILD_ROOT + '/css/fonts'
    }
};

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: WEB_ROOT
        }
    });
});

gulp.task('serve:dist', function() {
    browserSync.init({
        server: {
            baseDir: BUILD_ROOT
        }
    });
});

gulp.task('sass', function () {
    return sass(config.sass.src)
        .pipe($.plumber())
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest(config.sass.dest))
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

gulp.task('js', function() {
    return gulp.src(config.scripts.src)
        .pipe(amdOptimize("init", {
            baseUrl: 'html/js',
            configFile: 'html/js/init.js',
            paths: {
                jquery: '../bower_components/jquery/dist/jquery.min'
            }
        }))
        .pipe($.concat('init.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(config.scripts.dest))
        .pipe($.size());
});

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

gulp.task('clean', function () {
    del(['.sass-cache/**', 'dist'], function (err, paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });
});

gulp.task('build', ['images', 'html', 'js']);