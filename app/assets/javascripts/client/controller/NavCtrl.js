Brello.controller('NavCtrl', ['$scope', 'Auth', 'BoardService', '$state', function ($scope, Auth, BoardService, $state) {
	Auth.currentUser().then(function (user) {
		$scope.user = user;
	});

	$scope.logout = function () {
		Auth.logout().then(
			function () {
				$state.go('signin');
			}
		);
	};

	$scope.boards = BoardService.all();

	$scope.$on('board.created', function (event, board) {
		$scope.boards.push(board);
	});

}]);
