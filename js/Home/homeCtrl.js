angular.module("routingApp")
	.controller("homeCtrl", function($scope, countryService) {
		
		countryService.getCountries();
		
	});