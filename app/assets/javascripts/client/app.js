var Brello = angular.module('Brello', ['ui.router', 'restangular', 'ngFlash', 'Devise']);

Brello.config(function (RestangularProvider, $stateProvider, $urlRouterProvider) {
	RestangularProvider.setBaseUrl = '/api/v1';
	RestangularProvider.setRequestSuffix = '.json';

	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: ''
		})
})
