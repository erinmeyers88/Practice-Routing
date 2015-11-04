angular.module("routingApp")
	.directive("countryDirective", function () {

		return {
			templateUrl: "js/Directives/countryDirective/countryDirective.html",

			scope: {
				countryinfo: "="

			}

				
		};
		
	});