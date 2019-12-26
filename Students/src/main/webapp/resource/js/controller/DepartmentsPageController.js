var app = angular.module('app');

app.controller('DepartmentsPageController', [ '$scope', '$window',
		'$rootScope', 'departments', 'DepartmentFactory',
		function($scope, $window, $rootScope, departments, DepartmentFactory) {

			$rootScope.activeTab = 'departments';
			$scope.departments = departments;

			$scope.deleteDepartmentById = function(id) {
				var promise = DepartmentFactory.deleteDepartmentById(id);

				promise.then(function(response) {
					$window.location.reload();
				});
			}

			$scope.findDepartmentById = function(id) {
				$window.location.href = "#/departments/form/" + id;
			}
		} ]);
