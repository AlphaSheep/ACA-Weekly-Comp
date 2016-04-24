(function() {
  'use strict';
  
  angular
    .module('acaWeeklyComp')
    .service('ScrambleFactory', ScrambleFactory);

  /** @ngInject */
  function ScrambleFactory($resource) {
 
    this.getScrambles = function() {
        return $resource("http://localhost:3000/sheets", {});
    };    
    
  }
})();
