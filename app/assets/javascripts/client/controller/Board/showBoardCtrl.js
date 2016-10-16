Brello.controller('showBoardCtrl', ['$scope', 'BoardService', '$stateParams', '$rootScope',
	function ($scope, BoardService, $stateParams, $rootScope) {
		BoardService.find($stateParams.id).then(
			function success(board) {
				$rootScope.board = board
				$rootScope.lists = board.lists
			}
		);

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
