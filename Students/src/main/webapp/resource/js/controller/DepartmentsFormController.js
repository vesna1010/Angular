var app = angular.module('app');

app.controller('DepartmentsFormController', [
		'$scope',
		'$window',
		'$rootScope',
		'department',
		'DepartmentFactory',
		function($scope, $window, $rootScope, department, DepartmentFactory) {

			$rootScope.activeTab = 'departments';
			$scope.department = department;

			$scope.saveDepartment = function(department) {
				var promise = DepartmentFactory.saveDepartment(department);

				promise.then(function(response) {
					$window.location.reload();
				});
			}

			$scope.updateDepartment = function(department, id) {
				var promise = DepartmentFactory
						.updateDepartment(department, id);

				promise.then(function(response) {
					$window.location.href = "#/departments/form";
				});
			}

		} ]);
