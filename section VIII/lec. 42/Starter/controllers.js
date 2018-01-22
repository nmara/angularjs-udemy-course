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
    
    $scope.convertToCelsius = function(degK) {
        return Math.round(degK - 273.15);
    }
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000); //to get right date
    }
}]);