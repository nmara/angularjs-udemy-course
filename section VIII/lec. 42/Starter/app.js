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
    .when("/!/forecast", {
        templateUrl: "pages/forecast.html",
        controller: "forecastController"
    })
});

//Custom service

weatherApp.service('cityService', function() {
    this.city = "New York";
});

//Controllers

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
    $scope.city = cityService.city;
     $scope.$watch('city', function() {
        cityService.city = $scope.city;
    })
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService){
    $scope.city = cityService.city;
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?&appid=ceb1e19ab012fa84e9442205e74b43cc&", { callback: "JSON_CALLBACK" }, { get: {method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q:$scope.city });
    
    $scope.contertToCelsius = function(degK) {
        return Math.round(degK - 273.15);
    }
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000); //to get right date
    }
}]);