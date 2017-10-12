var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
    .when('/', {
    	template : '<h1 class="text-center">HOME PAGE</h1>',
    	controller : 'HomeController'
    })
    .when('/departments', {
    	templateUrl : '/Students/resources/templates/departments.html',
	    controller : 'DepartmentsController',
	    resolve : {
			departments : function(DepartmentFactory) {
				return DepartmentFactory.findAllDepartments();
			}
		}
    })
    .when('/addDepartment', {
    	templateUrl : '/Students/resources/templates/departmentForm.html',
	    controller : 'OneDepartmentController',
	    resolve : {
			department : function() {
				return {};
			}
		}
    })
    .when('/findDepartment/:id', {
    	templateUrl : '/Students/resources/templates/departmentForm.html',
	    controller : 'OneDepartmentController',
	    resolve : {
			department : function(DepartmentFactory) {
				return DepartmentFactory.findDepartmentById();
			}
		}
    })
    .when('/deleteDepartment/:id', {
    	templateUrl : '/Students/resources/templates/departments.html',
	    controller : 'DepartmentsController',
	    resolve : {
			departments : function(DepartmentFactory) {
				return DepartmentFactory.deleteDepartmentById();
			}
		}
    })
    .when('/students', {
    	templateUrl : '/Students/resources/templates/students.html',
	    controller : 'StudentsController',
	    resolve : {
	    	students : function(StudentFactory) {
				return StudentFactory.findAllStudents();
			},
			departments : function(DepartmentFactory) {
				return DepartmentFactory.findAllDepartments();
			}
		}
    })
     .when('/addStudent', {
    	templateUrl : '/Students/resources/templates/studentForm.html',
	    controller : 'OneStudentController',
	    resolve : {
	    	 student : function() {
	 	    	return {};
	 	    },
	 	    departments : function(DepartmentFactory) {
	 			return DepartmentFactory.findAllDepartments();
	 		}
	    }
    })
    .when('/findStudent/:id', {
    	templateUrl : '/Students/resources/templates/studentForm.html',
	    controller : 'OneStudentController',
	    resolve : {
			student : function(StudentFactory) {
				return StudentFactory.findStudentById();
			},
			departments : function(DepartmentFactory) {
				return DepartmentFactory.findAllDepartments();
			}
		}
    })
    .when('/deleteStudent/:id', {
    	templateUrl : '/Students/resources/templates/students.html',
	    controller : 'StudentsController',
	    resolve : {
			students : function(StudentFactory) {
				return StudentFactory.deleteStudentById();
			},
			departments : function(DepartmentFactory) {
				return DepartmentFactory.findAllDepartments();
			}
		}
    })
    .otherwise({
			redirectTo : "/"
	})
	.caseInsensitiveMatch = true;
}]);


