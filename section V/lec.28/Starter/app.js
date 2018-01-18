var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/second/:num', { //":" - this calls a value
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $scope.name = 'Main';

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {

    $scope.num = $routeParams.num || 1;

}]); // routeParams can give you a value to the url
