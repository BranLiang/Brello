Brello.directive('myNav', ['Auth', 'BoardService', '$state', function (Auth, BoardService, $state) {
	return {
		templateUrl: 'templates/nav.html',
		restrict: 'E',
		scope: {},
		link: function (scope) {
			Auth.currentUser().then(function (user) {
				scope.user = user;
			});

			scope.logout = function () {
				Auth.logout().then(
					function () {
						$state.go('signin');
					}
				);
			};

			scope.boards = BoardService.all();

			scope.$on('board.created', function (event, board) {
				scope.boards.push(board);
			});

			scope.$on('board.deleted', function (event, board) {
				scope.boards.splice(scope.boards.indexOf(board), 1);
			});
		}
	}
}]);
