var Brello = angular.module('Brello', ['ui.router', 'restangular', 'ngFlash', 'Devise', 'angularInlineEdit', 'dndLists']);

Brello.config(function (RestangularProvider, $stateProvider, $urlRouterProvider) {
	RestangularProvider.setBaseUrl('/api/v1');
	RestangularProvider.setRequestSuffix('.json');

	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('signin', {
			url: '/signin',
			templateUrl: 'templates/auth/signin.html',
			controller: ['Auth', '$scope', '$state', function (Auth, $scope, $state) {
				var config = {
					headers: {
						'X-HTTP-Method-Override': 'POST'
					}
				};
				$scope.signin = function (params) {
					Auth.login(params, config).then(
						function success(user) {
							$scope.signinParams = {};
							$state.go('board');
						}
					)
				};
			}]
		})
		.state('signup', {
			url: '/signup',
			templateUrl: 'templates/auth/signup.html',
			controller: ['Auth', '$scope', '$state', function (Auth, $scope, $state) {
				var config = {
					headers: {
						'X-HTTP-Method-Override': 'POST'
					}
				};
				$scope.signup = function (params) {
					Auth.register(params, config).then(
						function success(user) {
							$scope.signupParams = {};
							$state.go('board');
						}
					)
				}
			}]
		})
		.state('board', {
			url: '/',
			templateUrl: "templates/board.html"
		})
		.state('board.show', {
			url: ':id',
			templateUrl: 'templates/boards/show.html',
		});
});
