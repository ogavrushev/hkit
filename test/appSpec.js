define(['app', 'jquery', 'model/base'], function(App, $, Base) {
    describe('App init test', function() {
        it('should init the app', function () {
            App.initialize();
        });
    });

    describe('Base title test', function () {
        it('should set app title', function () {
           Base.setTitle('Oleg');
            expect(Base.title).toBe('Oleg');
        });
    })
});
