var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $http.get('/api') // you put an address of API in "" and brackets
        .success(function (result) {
            $scope.rules = result;
        }) // if it gets data, success method will run
        .error(function (data, status) {
            console.log(data);
        }); // if there is an error, error method will run

    $scope.newRule = "";
    $scope.addRule = function() {
        $http.post('/api', { newRule: $scope.newRule}) // it gives new data to the server (API)!!!
        .success(function(result) {
            $scope.rules = result;
            $scope.newRule = '';
        })
        .error(function(data, status) {
            console.log(data);
        });
    }
}]);
