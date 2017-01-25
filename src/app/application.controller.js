(function() {

angular
    .module('seedApp')
    .controller('ApplicationController', ApplicationController);

    function ApplicationController() {
        console.log('ApplicationController online');
    };

})();