// Initalize myApp
var myApp = angular.module('myApp', ['ngRoute']);

// Config
myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'HC'
    }).when('/brock', {
        templateUrl: 'views/brock.html',
        controller: 'BrockController',
        controllerAs: 'BC'
    }).when('/spacedog', {
        templateUrl: 'views/spacedog.html',
        controller: 'SpacedogController',
        controllerAs: 'SC'
    }).when('/thisguy', {
        templateUrl: 'views/thisguy.html',
        controller: 'GuyController',
        controllerAs: 'GC'
    });

    // For removing #!
    $locationProvider.html5Mode(true);
}); // end config