app.controller('StudentsController', 
	       [ '$scope', '$rootScope', 'students', 'departments',
		function($scope, $rootScope, students, departments) {
			$rootScope.activeTab = 'students';
			$scope.students = students;
			$scope.departments = departments;
			$scope.name = "All Departments";
		}]);

app.controller("OneStudentController", 
	       [ '$scope', '$rootScope', '$location', 'StudentFactory', 'student', 'departments', 
		function($scope, $rootScope, $location, StudentFactory, student, departments) {
			$rootScope.activeTab = 'students';
			$scope.student = student;
			$scope.departments = departments;
			
			$scope.saveOrUpdateStudent = function(student) {
				var func = student.id == undefined ? StudentFactory.saveStudent : StudentFactory.updateStudent;
				func(student).success(function(message) {
					showMessage(message);
				});
			}
			
			function showMessage(message) {
				alert(message);
				$location.path("/students");
			}
		}]);
