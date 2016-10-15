Brello.controller('newBoardCtrl', ['$scope', 'BoardService', function ($scope, BoardService) {
	$scope.create = function (boardParams) {
		BoardService.create(boardParams);
	}
}]);
