Brello.controller('NavCtrl', ['$scope', 'Auth', function ($scope, Auth) {
	Auth.currentUser().then(function (user) {
		$scope.user = user;
	});

	$scope.logout = Auth.logout;

}]);
