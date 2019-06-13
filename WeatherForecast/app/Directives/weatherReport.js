// DIRECTIVES
weatherApp.directive("weatherReport", function () {
	return {
		templateUrl: 'app/directives/weatherReport.html',
		replace: true,
		scope: {
			weatherListItem: "=",
			convertToCelsius: "&",
			convertToDate: "&",
			dateFormat: "@"
		}
	};
});