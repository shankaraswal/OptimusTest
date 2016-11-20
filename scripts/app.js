	// create the module and name it weatheraApp
	var weatheraApp = angular.module('weatheraApp', ['ngRoute']);

	// configure our routes
	weatheraApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			})
			.when('/location', {
				templateUrl : 'views/location.html',
				controller  : 'shareLocationController'
			})
			.when('/contact', {
				templateUrl : 'views/contact.html',
				controller  : 'contactController'
			})
			.otherwise({
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			});
		   $locationProvider.html5Mode(true);	
	}]);
	