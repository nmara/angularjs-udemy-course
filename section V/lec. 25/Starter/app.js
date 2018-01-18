var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    $scope.name = 'Main';
}]);

myApp.controller('secondController', ['$scope', function($scope) {
    $scope.name = 'Second';
}]);

// Important: $scope in those two cases is just an instance of object $scope, and that's why the second scope doesn't override the first one. 
