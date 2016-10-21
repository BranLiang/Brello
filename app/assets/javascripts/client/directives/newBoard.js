Brello.directive('newBoard', ['BoardService', function (BoardService) {
	return {
		templateUrl: "templates/boards/new.html",
		restrict: 'E',
		scope: {},
		link: function (scope) {
			scope.create = function (boardParams) {
				BoardService.create(boardParams).then(
					function (board) {
						scope.boardParams = {};
					}
				);
			}
		}
	}
}]);
