Brello.controller('listCtrl', ['$scope', 'ListService', '$stateParams', 'BoardService', '$rootScope', 'CardService',
	function ($scope, ListService, $stateParams, BoardService, $rootScope, CardService) {
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

		// for the card service
		$scope.createCard = function (params, list_id) {
			CardService.create({
				title: params.title,
				list_id: list_id
			});
			$scope.cardParams = {};
		};

		$scope.$on('card.created', function (event, card) {
			$scope.list.cards.push(card);
		});

	}
]);
