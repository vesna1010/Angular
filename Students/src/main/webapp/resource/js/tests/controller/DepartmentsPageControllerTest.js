describe("DepartmentsPageController Test", function() {

	var scope, rootScope, window, departments, service, controller;

	beforeEach(module('app'));

	beforeEach(inject(function($rootScope, $controller, $window,
			DepartmentFactory) {
		scope = $rootScope.$new();
		rootScope = $rootScope;
		window = $window;
		service = DepartmentFactory;

		departments = [ {
			id : 1,
			title : 'Title A'
		}, {
			id : 2,
			title : 'Title B'
		} ];

		controller = $controller('DepartmentsPageController', {
			$scope : scope,
			$rootScope : rootScope,
			$window : window,
			departments : departments,
			DepartmentFactory : service
		})
	}));

	it('init test', function() {
		expect(rootScope.activeTab).toEqual('departments');
		expect(scope.departments.length).toEqual(2);
	});

	it('deleteDepartmentById test', function() {
		spyOn(service, 'deleteDepartmentById').and.callFake(function(id) {
			return {
				then : function() {
				}
			}
		});

		scope.deleteDepartmentById(1);

		expect(service.deleteDepartmentById).toHaveBeenCalledWith(1);
	});

	it('findDepartmentById test', function() {
		scope.findDepartmentById(1);

		expect(window.location.href).toContain('#/departments/form/1');
	});

});
