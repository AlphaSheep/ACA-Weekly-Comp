(function() {
  'use strict';
  
  angular
    .module('acaWeeklyComp')
    .filter('cleanScramble', cleanScramble);

  /** @ngInject */
  function cleanScramble() {
 
    return function(input) {
        return input.trim();
    };    
    
  }
})();