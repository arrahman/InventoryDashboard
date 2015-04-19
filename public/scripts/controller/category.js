routerApp.controller('CategoryCtrl', function($scope, $http) {

	$http.get('http://localhost:8888/resful/public/v1/categories').
	success(function(data) {
	    $scope.categories = data.categories;
	});
}).controller('CategoryEditCtrl', ['$scope', '$http', '$stateParams', '$state',
		function($scope, $http, $stateParams, $state) {

		$scope.showLoading = true;
		$scope.showSubmit = true;

		$http.get('http://localhost:8888/resful/public/v1/categories/'+ $stateParams.id).
		  	success(function(data, status) {
		  		console.log(data);
		  		$scope.formData = data;
		  	}).
		  	error(function(data, status) {
		  		Logger.debug(data);
		  	});
	}]);