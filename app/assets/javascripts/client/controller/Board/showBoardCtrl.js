Brello.controller('showBoardCtrl', ['$scope', 'BoardService', '$stateParams', '$rootScope',
	function ($scope, BoardService, $stateParams, $rootScope) {
		$rootScope.board = BoardService.find($stateParams.id);

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
	}
]);
