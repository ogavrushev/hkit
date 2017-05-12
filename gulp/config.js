const BUILD_ROOT = 'dist',
    TEST_ROOT = 'test',
    WEB_ROOT = 'src';

const config = {
    browserSync: {
        host: "localhost",
        browser: ["google chrome"],
        reloadDelay: 800,
        debug: true,
        server: {
            baseDir: BUILD_ROOT
        },
    },
    markup: {
        all: WEB_ROOT + '/**/*.html',
        src: WEB_ROOT + '/index.html',
        dist: BUILD_ROOT
    },
    sass: {
        all: WEB_ROOT + '/css/**/*.scss',
        src:  WEB_ROOT + '/css/app.scss',
        dist: BUILD_ROOT + '/css'
    },
    scripts: {
        all: WEB_ROOT + '/js/**/*.js',
        src:  WEB_ROOT + '/js/app.js',
        dist: BUILD_ROOT + '/js'
    },
    images: {
        src:  WEB_ROOT + '/img/**/*',
        dist: BUILD_ROOT + '/img'
    },
    fonts: {
        src: WEB_ROOT+ '/css/fonts/**',
        dist: BUILD_ROOT + '/css/fonts'
    },
    tests: {
        all: TEST_ROOT + '/**/*.js',
        src: TEST_ROOT,
        specs: TEST_ROOT + 'spec'
    },
    paths: {
        test: BUILD_ROOT + '/**/*',
        prod: BUILD_ROOT
    }
};

module.exports = config;
