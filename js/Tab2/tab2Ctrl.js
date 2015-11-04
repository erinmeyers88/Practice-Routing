angular.module("routingApp")
	.controller("tab2Ctrl", function($scope, countryService) {
		
		// $scope.countryData = countryService.returnCountryData();

		
		
		$scope.getCountries = function () {
				countryService.getCountries().then(function(results) {
					$scope.countryData = results;
					console.log(results);
				});
		};
		
		$scope.getCountries();
		
	});