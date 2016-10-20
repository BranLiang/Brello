Brello.controller('CardCtrl', ['$scope', 'CardService', function ($scope, CardService) {
	$scope.createCard = function (params, list_id) {
		CardService.create({
			title: params.title,
			list_id: list_id
		});
		$scope.cardParams = {};
	};

	// $scope.$on('card.created', function (event, card) {
	// 	$scope.list.cards.push(card);
	// });

	console.log($scope.list.cards);


}]);
