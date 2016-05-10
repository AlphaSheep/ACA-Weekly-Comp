(function() {
    'use strict';

    angular
        .module('acaWeeklyComp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($log, eventsFactory) {

        // var vm = this;
        $log.log(eventsFactory.getEvents());
        $log.log(eventsFactory.getEventsForCategory('NxNxN'));

    }
})();
