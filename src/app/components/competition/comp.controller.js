(function() {
  'use strict';
  
  angular
    .module('acaWeeklyComp')
    .controller('CompController', CompController);

  /** @ngInject */
  function CompController(ScrambleFactory) {
    var vm = this;  
      
    vm.testString = 'This is a test';
    

      ScrambleFactory.getScrambles().query(function(response) {
          vm.scrambles = response;
          console.log(response);
      },
       function(error) {
          vm.scrambles = error;
          console.log(error);
          
      });
      
  }
})();