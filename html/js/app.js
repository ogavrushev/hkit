define('app', ['jquery', 'controller/base'], function ($, Base) {
    return {
        initialize: function () {
            console.log('app started');
            console.log($().jquery);
            setTimeout(function () {
                console.log('initialized!');
            }, 2000);
            Base.setTitle("Oleg");
            console.log(Base.getTitle());
        }
    }
});