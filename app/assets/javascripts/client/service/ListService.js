Brello.factory('ListService', ['Restangular', '$rootScope', function (Restangular, $rootScope) {
	var ListService = {};

	ListService.create = function (params) {
		return Restangular.all('lists').post({
			list: params
		}).then(
			function success(list) {
				$rootScope.$broadcast('list.created', list);
				console.log(list);
				return list;
			}
		)
	};

	return ListService;
}]);
