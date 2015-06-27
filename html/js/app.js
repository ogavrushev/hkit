define('app', function () {
    return {
        initialize: function () {
            console.log('init start');

            setTimeout(function () {
                console.log('initialized!');
            }, 2000)
        }
    }
});