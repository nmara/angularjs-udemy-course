var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {

    console.log($scope);

});

var searchPeople = function(firstName, $scope, height, age, occupation) {
    return 'Jane Doe';
}

console.log(angular.injector().annotate(searchPeople)); //This gives you an array with arguments of a given function. In this case it will be ["firstName", "$scope", "height", "age", "occupation"]
