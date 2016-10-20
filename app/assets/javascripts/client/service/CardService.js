Brello.factory('CardService', ['Restangular', '$rootScope', function (Restangular, $rootScope) {
	var CardService = {};

	CardService.create = function (params) {
		Restangular.all('cards').post({
			card: params
		}).then(
			function success(card) {
				$rootScope.$broadcast('card.created', card);
				console.log(card);
			}
		)
	};

	return CardService;
}]);
