weatherApp.controller('homeController', ['$scope', '$location', 'cityService', '$log', function ($scope, $location, cityService, $log) {

	$scope.city = cityService.city;

	$scope.$watch('city', function () {

		cityService.city = $scope.city;

	});

	$scope.submit = function () {
		$location.path("/forecast");
	};

}]); 