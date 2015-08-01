'use strict';

var env = require('config.json')('../env.json');

var BUILD_ROOT = '.prod',
    TEST_ROOT = 'test',
    WEB_ROOT = 'html',
    TMP_ROOT = '.test';

module.exports = {
    markup: {
        all: WEB_ROOT + '/**/*.html',
        src: WEB_ROOT + '/*.html',
        dest: BUILD_ROOT,
        tmp: TMP_ROOT
    },
    sass: {
        all: WEB_ROOT + '/css/**/*.scss',
        src:  WEB_ROOT + '/css/app.scss',
        dest: BUILD_ROOT + '/css',
        tmp: TMP_ROOT + '/css'
    },
    scripts: {
        src:  WEB_ROOT + '/js/**/*.js',
        dest: BUILD_ROOT + '/js',
        tmp: TMP_ROOT + '/js'
    },
    images: {
        src:  WEB_ROOT + '/img/**/*',
        dest: BUILD_ROOT + '/img',
        tmp: TMP_ROOT + '/img'
    },
    fonts: {
        src: 'html/css/fonts/**',
        dest: BUILD_ROOT + '/css/fonts',
        tmp: TMP_ROOT + '/css/fonts'
    },
    tests: {
        all: TEST_ROOT + '/**/*.js',
        src: TEST_ROOT,
        specs: TEST_ROOT + 'spec'
    },
    paths: {
        test: TMP_ROOT + '/**/*',
        prod: BUILD_ROOT
    }
};
