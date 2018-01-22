weatherApp.directive("weatherReport", function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: { //isolating scope
            weatherTemp: "=", //because object
            convertToStandard: "&", //because function
            convertToDate: "&", //again - function
            dateFormat: "@" //beacuse string     
        }
    }
});