var myApp = angular.module('myApp', []);

myApp.controller('mainController', ["$scope", "$log", function($scope, $log) {
    $log.info($scope);
}]);  //We use it for minification. 
