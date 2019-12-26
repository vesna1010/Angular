var app = angular.module('app');

app.controller('StudentsFormController', [
		'$scope',
		'$window',
		'$rootScope',
		'student',
		'departments',
		'StudentFactory',
		function($scope, $window, $rootScope, student, departments,
				StudentFactory) {

			$rootScope.activeTab = 'students';
			$scope.student = student;
			$scope.departments = departments;

			$scope.saveStudent = function(student) {
				var promise = StudentFactory.saveStudent(student);

				promise.then(function(response) {
					$window.location.reload();
				});
			}

			$scope.updateStudent = function(student, id) {
				var promise = StudentFactory.updateStudent(student, id);

				promise.then(function(response) {
					$window.location.href = "#/students/form";
				});
			}
		} ]);
