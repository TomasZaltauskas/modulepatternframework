(function () {
    'use strict';

    angular.module('login',[]).directive('login',function () {
        return{
            restrict: 'E',
            scope: {},
            templateUrl: 'components/directives/templates/login-template.html',
            controller: function ($scope){//, loginService, $cookies) {

                $scope.loggedIn = false;
                $scope.errorTextAlert = false;



            }
        }

    });

})();