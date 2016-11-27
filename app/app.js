(function () {
    'use strict';

    angular.module('modulePatternApp', [
        'ui.router',
        'view1'

    ]).config(['$locationProvider', '$stateProvider',
        function ($locationProvider, $stateProvider) {

            $stateProvider
                .state('view1',{
                    url: '/',
                    templateUrl: 'view1/view1.html',
                    controller:'view1.ctrl'
                })

            $locationProvider.html5Mode(true);

        }]);
})();

