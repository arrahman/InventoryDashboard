var myApp = angular.module('myApp',[]);

myApp.controller('CategoryController', ['$scope', '$http', function($scope, $http) {

	    $http.get('http://localhost:8888/resful/public/v1/categories').
        success(function(data) {
            $scope.categories = data.categories;
            console.log(data);
        });
}]);