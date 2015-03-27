routerApp.controller('CategoryCtrl', function($scope, $http) {

	$http.get('http://localhost:8888/resful/public/v1/categories').
	success(function(data) {
	    $scope.categories = data.categories;
	});
});