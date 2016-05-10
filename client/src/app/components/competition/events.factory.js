(function() {
  'use strict';
  
  angular
    .module('acaWeeklyComp')
    .service('eventsFactory', eventsFactory);

  /** @ngInject */
  function eventsFactory() {
    
    var eventNameMap = {};
    eventNameMap["222"] = {id:0, category:"NxNxN", name:"2x2 Cube"};
    eventNameMap["333"] = {id:1, category:"NxNxN", name:"3x3 Cube"};
    eventNameMap["444"] = {id:2, category:"NxNxN", name:"4x4 Cube"};
    eventNameMap["555"] = {id:3, category:"NxNxN", name:"5x5 Cube"};
    eventNameMap["666"] = {id:4, category:"NxNxN", name:"6x6 Cube"};
    eventNameMap["777"] = {id:5, category:"NxNxN", name:"7x7 Cube"};
    eventNameMap["pyram"] = {id:6, category:"Other", name:"Pyraminx"};
    eventNameMap["minx"] = {id:7, category:"Other", name:"Megaminx"};
    eventNameMap["skewb"] = {id:8, category:"Other", name:"Skewb"};
    eventNameMap["sq1"] = {id:9, category:"Other", name:"Square-1"};
    eventNameMap["clock"] = {id:10, category:"Other", name:"Rubik's Clock"};
    eventNameMap["333bf"] = {id:11, category:"Blind", name:"3x3 Blindfolded"};
    eventNameMap["444bf"] = {id:12, category:"Blind", name:"4x4 Blindfolded"};
    eventNameMap["555bf"] = {id:13, category:"Blind", name:"5x5 Blindfolded"};
    eventNameMap["333mbf"] = {id:14, category:"Blind", name:"Multiple Blindfolded"};
    eventNameMap["333oh"] = {id:15, category:"3x3Var", name:"3x3 One Handed"};
    eventNameMap["333ft"] = {id:16, category:"3x3Var", name:"3x3 with Feet"};
    eventNameMap["333fm"] = {id:17, category:"3x3Var", name:"Fewest Moves Challenge"};

    this.getEvents = function() {
        return eventNameMap;
    };    
    
    this.getEvent = function(eventCode) {
        return eventNameMap[eventCode];        
    };
    
    this.getEventsForCategory = function(category) {
     //   return eventNameMap.filter(function (event) {
      //      return event.category == category;
       // });
    }
    
  }
})();
