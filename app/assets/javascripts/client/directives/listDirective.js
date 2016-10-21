Brello.directive("list", ['CardService', function (CardService) {
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

		}
	};
}]);
