Brello.factory('ListService', ['Restangular', '$rootScope', function (Restangular, $rootScope) {
	var ListService = {};

	ListService.create = function (params) {
		return Restangular.all('lists').post({
			list: params
		}).then(
			function success(list) {
				$rootScope.$broadcast('list.created', list);
				angular.element('#collapseListForm').collapse('hide');
				return list;
			}
		)
	};

	ListService.updateTitle = function (newValue, id) {
		return Restangular.one('lists', id).patch({
			list: {
				title: newValue
			}
		})
	};

	ListService.delete = function (list) {
		console.log(list);
		return Restangular.one('lists', list.id).remove().then(
			function success() {
				$rootScope.$broadcast('list.deleted', list);
			}
		);
	};

	return ListService;
}]);
