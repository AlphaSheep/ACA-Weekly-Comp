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
        
        vm.potato = false;

        ScrambleFactory.getScrambles().query(function(response) {
            vm.scrambles = response;
            vm.hasScrambles = true;
            $log.log(response)
        }, function(error) {
            vm.error = error;
            $log.log(error)
            
        });

    }
})();
