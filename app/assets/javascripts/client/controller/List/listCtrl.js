Brello.controller('listCtrl', ['$scope', 'ListService', '$stateParams', 'BoardService', '$rootScope',
	function ($scope, ListService, $stateParams, BoardService, $rootScope) {
		$scope.createList = function (params) {
			console.log("sdkfjdks")
			return ListService.create({
				title: params.title,
				board_id: $stateParams.id
			}).then(
				function success(list) {
					$scope.listParams = {};
				}
			);
		};

		$scope.updateTitle = function (newValue, id) {
			return ListService.updateTitle(newValue, id);
		};

		$scope.deleteList = function (list) {
			return ListService.delete(list);
		};

		$scope.$on('list.created', function (event, list) {
			$rootScope.lists.push(list);
		});

		$scope.$on('list.deleted', function (event, list) {
			var index = _.indexOf($rootScope.lists, list);
			$rootScope.lists.splice(index, 1);
		});

	}
]);
