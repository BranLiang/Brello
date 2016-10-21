Brello.factory('CardService', ['Restangular', '$rootScope', function (Restangular, $rootScope) {
	var CardService = {};

	CardService.create = function (params) {
		return Restangular.all('cards').post({
			card: params
		}).then(
			function success(card) {
				$rootScope.$broadcast('card.created', card);
				return card;
			}
		);
	};

	CardService.delete = function (card) {
		return Restangular.one('cards', card.id).remove();
	};

	return CardService;
}]);
