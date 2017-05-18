(function () {
    'use strict';

    angular.module('home',[]).controller('home.ctrl', ['$scope','$http', function ($scope,$http) {

        $scope.items = null;
        $scope.selectedItem = null;
        $scope.description = 'No description';

        $scope.addOrder = function (items) {
            var order = 0;
            while (items[order]) {
                items[order].order = order;
                order++;
            }
        };

        $http({
            method: 'GET',
            url: 'DB/demo.json'
        }).then(function successCallback(response) {
            $scope.items = response.data.items;
            $scope.addOrder($scope.items);

        }, function errorCallback(response) {
            $scope.error = 'Can`t load items';
        });

        $scope.switchItems = function (index, direction) {
            var o1 = $scope.items[index].order;
            var o2 = $scope.items[index + direction].order;
            $scope.items[index].order = o2;
            $scope.items[index + direction].order = o1;
        };

        $scope.whichItem = function (itemName) {
            $scope.selectedItem = itemName;
        };

        function isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        $scope.addItem = function (poster,name,amount,price) {
            if(!isNumber(amount) || amount % 1 !== 0){
                $scope.errorCartTextAlert = "Wrong amount!";
                $scope.successCartTextAlert = null;
            }else{
                ItemsCart.addToCart({Poster:poster,Item:name,Amount:amount,Price:((amount*price)).toFixed(2)});
                $scope.successCartTextAlert = "Item added to cart!";
                $scope.errorCartTextAlert = null;
            }

        }

        }]);

})();