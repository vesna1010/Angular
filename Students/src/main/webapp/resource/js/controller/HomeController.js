var app = angular.module('app');

app.controller('HomeController', [ '$rootScope', function($rootScope) {
	$rootScope.activeTab = 'home';
	
} ]);
