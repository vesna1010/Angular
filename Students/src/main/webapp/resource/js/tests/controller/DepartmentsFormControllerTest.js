describe("DepartmentsFormController Test", function() {

	var scope, rootScope, window, department, service, controller;

	beforeEach(module('app'));

	beforeEach(inject(function($rootScope, $controller, $window,
			DepartmentFactory) {
		scope = $rootScope.$new();
		rootScope = $rootScope;
		window = $window;
		service = DepartmentFactory;

		department = {
			id : 1,
			title : 'Title'
		};

		controller = $controller('DepartmentsFormController', {
			$scope : scope,
			$rootScope : rootScope,
			$window : window,
			department : department,
			DepartmentFactory : service
		})
	}));

	it('init test', function() {
		expect(rootScope.activeTab).toEqual('departments');
		expect(scope.department.title).toEqual('Title');
	});

	it('saveDepartment test', function() {
		spyOn(service, 'saveDepartment').and.callFake(function(department) {
			return {
				then : function() {
				}
			}
		});

		scope.saveDepartment(department);

		expect(service.saveDepartment).toHaveBeenCalledWith(department);
	});

	it('updateDepartment test', function() {
		spyOn(service, 'updateDepartment').and
				.callFake(function(department, id) {
					return {
						then : function() {
						}
					}
				});

		scope.updateDepartment(department, 1);

		expect(service.updateDepartment).toHaveBeenCalledWith(department, 1);
	});

});
