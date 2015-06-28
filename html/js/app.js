define('app', ['jquery'], function ($) {
    return {
        initialize: function () {
            console.log('init start');
            console.log($().jquery);
            setTimeout(function () {
                console.log('initialized!');
            }, 2000)
        }
    }
});