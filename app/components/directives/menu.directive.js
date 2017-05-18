(function () {
    'use strict';

    angular.module('menu',[]).directive('menu',function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'components/directives/templates/menu-template.html',
            controller: function ($scope) {

            }
        };

    });

})();