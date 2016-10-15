var Brello = angular.module('Brello', ['ui.router', 'restangular', 'ngFlash', 'Devise']);

Brello.config(function (RestangularProvider, $stateProvider, $urlRouterProvider) {
	RestangularProvider.setBaseUrl('/api/v1');
	RestangularProvider.setRequestSuffix('.json');

	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('board', {
			url: '/',
			template: "<ui-view></ui-view>"
		})
		.state('board.show', {
			url: ':id',
			templateUrl: 'templates/boards/show.html',
			controller: ['$scope', 'BoardService', '$stateParams', function ($scope, BoardService, $stateParams) {
				$scope.board = BoardService.find($stateParams.id);
			}]
		})
})
