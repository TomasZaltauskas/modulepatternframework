(function () {
    'use strict';

    angular.module('modulePatternApp', [
        'ui.router',
        'home',
        'directives',
        'first',
        'second',
        'third'

    ]).config(['$locationProvider', '$stateProvider',
        function ($locationProvider, $stateProvider) {

            $stateProvider
                .state('home',{
                    url: '/',
                    templateUrl: 'home/home.html',
                    controller:'home.ctrl'
                })
                .state('first',{
                    url: '/first',
                    templateUrl: 'first/first.html',
                    controller:'first.ctrl'
                })
                .state('second',{
                    url: '/second',
                    templateUrl: 'second/second.html',
                    controller:'second.ctrl'
                })
                .state('third',{
                    url: '/third',
                    templateUrl: 'third/third.html',
                    controller:'third.ctrl'
                });


            $locationProvider.html5Mode(true);

        }]);
})();

