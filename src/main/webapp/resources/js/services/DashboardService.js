var dashboardservice = angular.module('dashboardservice', [ 'ngResource', 'ngRoute' ]);


dashboardservice.factory("phase12Service", function($resource) {
	return $resource("https://cdn.jsdelivr.net/gh/angular-ui/ui-grid.info@gh-pages/data/100.json",{}, {
		_get : {
			method : "GET",
			isArray: true
		}
	});
});