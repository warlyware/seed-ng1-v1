(function() {

angular
    .module('audio-player-app')
    .config(config);

    function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            template: '<div><audio-player></audio-player></div>',
            controller: function() {
                console.log('Home Controller Online');
            }
        });
    };

})();