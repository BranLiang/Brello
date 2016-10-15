Brello.controller('NavCtrl', ['$scope', 'Auth', 'BoardService', function ($scope, Auth, BoardService) {
	Auth.currentUser().then(function (user) {
		$scope.user = user;
	});

	$scope.logout = Auth.logout;

	$scope.boards = BoardService.all();

	console.log($scope.boards);

	$scope.$on('board.created', function (event, board) {
		$scope.boards.push(board);
	});

}]);
