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
 		  		$scope.formData = data;
		  	}).
		  	error(function(data, status) {
		  		Logger.debug(data);
		  	});

		  	$scope.submitData = function() 
			{
				$scope.showSubmit = false;
				
				if ($scope.formData)
				{
					var resourceURL = 'http://localhost:8888/resful/public/v1/categories/'+ $stateParams.id;

 					var formData = $scope.formData;
 
					$http.put(resourceURL, formData).
					  	success(function(data, status) {
					  		$scope.errors = null;
							$scope.success = 'Your data has been saved';
							$scope.showSubmit = true;
							$state.go('category');
					  	}).
					  	error(function(data, status) {
					  		$scope.errors = data.error.message;
							$scope.showSubmit = true;
					  	});
				}
			}
	}]);