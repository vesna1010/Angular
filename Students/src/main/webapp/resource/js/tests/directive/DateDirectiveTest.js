describe('DateDirective Test', function() {

	var scope, compile;

	beforeEach(module('app'));

	beforeEach(inject(function($compile, $rootScope) {
		compile = $compile;
		scope = $rootScope.$new();
		scope.date = new Date(2019, 9, 20);
	}));

	it('', function() {
		var element = element = angular
				.element("<my-date date='{{date}}'></my-date>");

		element = compile(element)(scope);
		
		scope.$apply();
		element.isolateScope().date = scope.date;
		element.isolateScope().$apply();
		
		expect(element.isolateScope().date).toBeDefined();
		expect(element.html()).toEqual('20.10.2019');
	});

});
