(function() {
    'use strict';

    angular
        .module('audio-player-app')
        .component('audioPlayer', {
            template: '<h2>audio template</h2>',
            controller: function() { console.log('AudioPlayer online'); }
        });
})();