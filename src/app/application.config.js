(function() {

angular
    .module('seedApp')
    .config(config);

    function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            template: '<h1>we are home</h1>',
            controller: function() {
                console.log('Home Controller Online');
            }
        });

        $stateProvider.otherwise()
    };

})();