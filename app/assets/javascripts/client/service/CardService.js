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

	return CardService;
}]);
