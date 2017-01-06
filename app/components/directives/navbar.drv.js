(function () {
    'use strict';

    angular.module('directives',[]).directive('navBar',function () {
        return{
            restrict: 'E',
            scope: {},
            templateUrl: 'components/directives/templates/navbar-template.html'
        }

    });

})();