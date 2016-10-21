Brello.directive("list", ['CardService', 'ListService', function (CardService, ListService) {
	return {
		templateUrl: "templates/lists/_list.html",
		restrict: "E",
		scope: {
			list: "=",
			deleteList: "&"
		},
		link: function (scope) {
			// for the card service
			scope.createCard = function () {
				CardService.create({
					title: scope.cardParams.title,
					list_id: scope.list.id
				}).then(function (response) {
					scope.list.cards.push(response);
				});
				scope.cardParams = {};
			};

			scope.deleteCard = function (card) {
				CardService.delete(card).then(
					function () {
						scope.list.cards.splice(scope.list.cards.indexOf(card), 1);
					}
				)
			};

			scope.updateTitle = function (newValue, id) {
				return ListService.updateTitle(newValue, id);
			};

		}
	};
}]);
