weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', '$log', function ($scope, $resource, $routeParams, cityService, $log) { 

	$scope.city = cityService.city;

	$scope.numberOfResults = $routeParams.numberOfResults || "10";

	$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast",
		{ get: { method: "JSONP" } });

	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.numberOfResults, APPID: "b1887bf2fd62dadae7cbe58ba9ea08f1" });	

	$log.log($scope.weatherResult);

	$scope.convertToCelsius = function (degK) {
		return Math.round(degK - 273);
	};

	$scope.convertToDate = function (dt) {
		return new Date(dt * 1000);
	};
	
}]); 

