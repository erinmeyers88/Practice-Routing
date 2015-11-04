angular.module("routingApp", ["ui.router"])

.config(function ($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		.state("home", {
			url: "/",
			templateUrl: "js/Home/homeTemp.html",
			controller: "homeCtrl"
			
		})
	
		.state("tab1", {
				url: "/tab1",
				templateUrl: "js/Tab1/tab1Temp.html",
				controller: "tab1Ctrl"
				
			})
	
		.state("tab2", {
					url: "/tab2",
					templateUrl: "js/Tab2/tab2Temp.html",
					controller: "tab2Ctrl"
					
				})
				
		.state("tab3", {
				url: "/tab3",
				templateUrl: "js/Tab3/tab3Temp.html",
				controller: "tab3Ctrl"
				
			});
			
			
	$urlRouterProvider.otherwise("/");
					
});