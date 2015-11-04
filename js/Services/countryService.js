angular.module("routingApp")
	.service("countryService", function ($http) {
		
		//var holdCountryData;
		
		this.getCountries = function () {

			var baseUrl = "https://restcountries.eu/rest/v1/all";
			return $http({
				method: "GET",
				url: baseUrl
			})
			.then(function (responseFromCall) {
				//holdCountryData = responseFromCall.data;
				return responseFromCall.data;
			});
		};

		// this.returnCountryData = function () {
		// 	if (holdCountryData === undefined) {
		// 		this.getCountries();
		// 	}
		// 	return holdCountryData;	
		// };
});