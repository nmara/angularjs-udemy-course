//Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);
//Now we have an angularjs app. 
//We add dependencies in an array

//Here we connect pages to index.html - ROUTES

weatherApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "pages/home.html",
        controller: 'homeController'
    })
    .when("/forecast", {
        templateUrl: "pages/forecast.html",
        controller: "forecastController"
    })
});

//Controllers

weatherApp.controller('homeController', ['$scope', function($scope){
    
}]);

weatherApp.controller('forecastController', ['$scope', function($scope){
    
}]);