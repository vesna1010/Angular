var app = angular.module('app', [ 'ngRoute' ]);

app.config([ '$routeProvider', function($routeProvider) {
	
	$routeProvider.when('/', {
		template : '<h1 class="text-center">HOME PAGE</h1>',
		controller : 'HomeController'
	});
	
	$routeProvider.when('/departments', {
		templateUrl : 'resources/templates/departments.html',
		controller : 'DepartmentsPageController',
		resolve : {
			departments : function(DepartmentFactory) {
				return DepartmentFactory.findAllDepartments();
			}
		}
	});
	
	$routeProvider.when('/departments/form/:id?', {
		templateUrl : 'resources/templates/departmentForm.html',
		controller : 'DepartmentsFormController',
		resolve : {
			department : function(DepartmentFactory, $route) {
				var id = $route.current.params.id;
				
				return (angular.isDefined(id) ? DepartmentFactory.findDepartmentById(id) : {});
			}
		}
	});
	
	$routeProvider.when('/students', {
		templateUrl : 'resources/templates/students.html',
		controller : 'StudentsPageController',
		resolve : {
			departments : function(DepartmentFactory) {
				return DepartmentFactory.findAllDepartments();
			},
			students : function(StudentFactory) {
				return StudentFactory.findAllStudents();
			}
		}
	});
	
	$routeProvider.when('/students/form/:id?', {
		templateUrl : 'resources/templates/studentForm.html',
		controller : 'StudentsFormController',
		resolve : {
			departments : function(DepartmentFactory) {
				return DepartmentFactory.findAllDepartments();
			},
			student : function(StudentFactory, $route) {
				var id = $route.current.params.id;
				
				return (angular.isDefined(id) ? StudentFactory.findStudentById(id) : {});
			}
		}
	});
	
	$routeProvider.otherwise({
		redirectTo : '/'
	});
	
	$routeProvider.caseInsensitiveMatch = true;
	
} ]);


