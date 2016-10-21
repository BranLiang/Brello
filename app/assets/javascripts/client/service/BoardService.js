Brello.factory('BoardService', ['Restangular', '$state', '$rootScope', function (Restangular, $state, $rootScope) {
	var BoardService = {};

	BoardService.create = function (params) {
		return Restangular.all('boards').post({
			board: params
		}).then(
			function success(board) {
				angular.element('#newBoardModal').modal('hide');
				$rootScope.$broadcast('board.created', board);
				$state.go('board.show', {
					id: board.id
				});
				return board;
			}
		);
	};

	BoardService.find = function (id) {
		return Restangular.one('boards', id).get();
	};

	BoardService.all = function () {
		return Restangular.all('boards').getList().$object;
	};

	BoardService.delete = function (board) {
		return Restangular.one('boards', board.id).remove().then(
			function success() {
				$state.go('board');
				$rootScope.$broadcast('board.deleted', board);
			}
		);
	};

	return BoardService;
}]);
