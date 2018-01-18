var myApp = angular.module('myApp', ['ngRoute']); //[]--> here go services

myApp.config(function($routeProvider) {
    $routeProvider
    .when('/', { //when I see this hash
        templateUrl:'pages/main.html', //I'm gonna connect this page (physical location of my pages goes into '')
        controller:'mainController' // to this controller
    })
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});

myApp.controller('mainController', ['$scope', "$log", function($scope, $log) {

    $scope.name = "main";

}]);

myApp.controller('secondController', ['$scope', "$log", function($scope, $log) {

    $scope.name = "second";

}]);
