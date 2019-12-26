describe('HomeController Test', function() {

	var rootScope, controller;

	beforeEach(module('app'));

	beforeEach(inject(function($rootScope, $controller) {
		rootScope = $rootScope;

		controller = $controller('HomeController', {
			$rootScope : rootScope
		})
	}));

	it('$rootScope test', function() {
		expect(rootScope.activeTab).toEqual('home');
	});

});
