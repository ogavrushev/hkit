define('app', ['jquery'], function ($) {
    return {
        initialize: function () {
            console.log('app started');
            console.log($().jquery);
            setTimeout(function () {
                console.log('initialized!');
            }, 2000)
        }
    }
});