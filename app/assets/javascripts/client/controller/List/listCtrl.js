Brello.controller('listCtrl', ['$scope', 'ListService', '$stateParams', 'BoardService', '$rootScope',
	function ($scope, ListService, $stateParams, BoardService, $rootScope) {
		$scope.createList = function (params) {
			return ListService.create({
				title: params.title,
				board_id: $stateParams.id
			});
			$scope.listParams = {};
		};

		$scope.$on('list.created', function (event, list) {
			$scope.lists.push(list);
		})
	}
]);
