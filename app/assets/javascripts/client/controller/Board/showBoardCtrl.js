Brello.controller('showBoardCtrl', ['$scope', 'BoardService', '$stateParams', function ($scope, BoardService, $stateParams) {
	$scope.board = BoardService.find($stateParams.id);
	$scope.updateName = function (newValue) {
		$scope.board.patch({
			board: {
				name: newValue
			}
		})
	};
	$scope.updateDescription = function (newValue) {
		$scope.board.patch({
			board: {
				description: newValue
			}
		})
	};
}]);
