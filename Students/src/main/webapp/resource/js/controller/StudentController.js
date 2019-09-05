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

