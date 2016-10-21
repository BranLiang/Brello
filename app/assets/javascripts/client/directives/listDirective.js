Brello.directive("list", ['CardService', function(CardService){
  return {
    templateUrl: "templates/lists/_list.html",
    restrict: "E",
    scope: {
      list: "="
    },
    link: function(scope){
      // for the card service
  		scope.createCard = function () {
  			CardService.create({
  				title: scope.cardParams.title,
  				list_id: scope.list.id
  			}).then(function(response){
          scope.list.cards.push(response);
        });
  			scope.cardParams = {};
  		};

      // scope.$on('card.created', function (event, card) {
  		// 	scope.list.cards.push(card);
  		// });
    }
  };
}]);
