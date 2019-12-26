var app = angular.module('app');

app.controller('StudentsPageController', [
		'$scope',
		'$window',
		'$rootScope',
		'students',
		'departments',
		'StudentFactory',
		function($scope, $window, $rootScope, students, departments,
				StudentFactory) {

			$rootScope.activeTab = 'students';
			$scope.students = students;
			$scope.departments = departments;

			$scope.deleteStudentById = function(id) {
				var promise = StudentFactory.deleteStudentById(id);

				promise.then(function(response) {
					$window.location.reload();
				});
			}

			$scope.findStudentById = function(id) {
				$window.location.href = "#/students/form/" + id;
			}
		} ]);
