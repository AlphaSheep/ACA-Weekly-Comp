(function() {
    'use strict';

    angular
        .module('acaWeeklyComp')
        .controller('CompController', CompController);

    /** @ngInject */
    function CompController($log, ScrambleFactory) {
        var vm = this;  

        vm.testString = 'This is a test';
        vm.hasScrambles   = false;
        vm.isLoading   = true;
        
        vm.potato = false;

        ScrambleFactory.getScrambles().query(function(response) {
            vm.scrambles = response;
            vm.hasScrambles = true;
            $log.log(response)
            vm.isLoading   = false;
        }, function(error) {
            vm.isLoading   = false;
            vm.error = error;
            $log.log(error)
            
        });

    }
})();
