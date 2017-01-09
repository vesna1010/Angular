var myApp=angular.module("app", ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.caseInsensitiveMatch=true;
	$routeProvider
	.when("/", {
		templateUrl:'/Students/templates/home.jsp',
		controller:'homeController'
	})
	.when("/listDepartments", {
		templateUrl:'/Students/templates/departments.jsp',
		controller:'departmentsController',
		resolve:{
			allDepartments: function(DepartmentsFactory) {
				return DepartmentsFactory.getDepartments();
			}
		}
	})
	.when("/removeDepartmentById/:id", {
		templateUrl:'/Students/templates/departments.jsp',
		controller:'departmentsController',
		resolve:{
			allDepartments: function(DepartmentsFactory) {
				return DepartmentsFactory.removeDepartment();
			}
		}
	})
	.when("/getDepartmentById/:id", {
		templateUrl:'/Students/templates/addDepartment.jsp',
		controller:'oneDepartmentController',
		resolve:{
			oneDepartment:function(DepartmentsFactory) {
			return DepartmentsFactory.getOneDepartment();	
			}
		}
	})
	.when("/addNewDepartment", {
		templateUrl:'/Students/templates/addDepartment.jsp',
		controller:'oneDepartmentController',
		resolve:{
			oneDepartment:function(){
				return {};
			}
		}
	})
	.when("/listStudents", {
		templateUrl:'/Students/templates/students.jsp',
		controller:'studentsController',
		resolve:{
			allStudents:function(StudentFactory){
				return StudentFactory.getStudents();	
			},
			allDepartments: function(DepartmentsFactory) {
				return DepartmentsFactory.getDepartments();
			}
		}
	})
	.when("/removeStudentById/:studentId", {
		templateUrl:'/Students/templates/students.jsp',
		controller:'studentsController',
		resolve:{
			allStudents:function(StudentFactory){
				return StudentFactory.removeStudent();	
			},
			allDepartments: function(DepartmentsFactory) {
				return DepartmentsFactory.getDepartments();
			}
		}
	})
	
	.when("/getStudentById/:studentId", {
		templateUrl:'/Students/templates/addStudent.jsp',
		controller:'oneStudent',
		resolve:{
			oneStudent:function(StudentFactory){
				return StudentFactory.getStudentById();
			},
			allDepartments: function(DepartmentsFactory) {
				return DepartmentsFactory.getDepartments();
			}
		}
	})
	.when("/addNewStudent", {
		templateUrl:'/Students/templates/addStudent.jsp',
		controller:'oneStudent',
		resolve:{
			oneStudent:function(){
				return {};
			},
			allDepartments: function(DepartmentsFactory) {
				return DepartmentsFactory.getDepartments();
			}
		}
	})
	.otherwise({
		redirectTo:"/"
	});

}]);
myApp.controller("homeController", function($scope, $rootScope){
	$scope.message="Home page";
	$rootScope.activeTab='home';
})
.controller("departmentsController", function($scope,$rootScope, allDepartments){
	$scope.departments=allDepartments;
	$rootScope.activeTab='departments';
})
.controller("oneDepartmentController", function(DepartmentsFactory, $scope,$rootScope, oneDepartment, $location){
	$scope.department=oneDepartment;
	$rootScope.activeTab='departments';
	$scope.saveDepartment=function(department){
		DepartmentsFactory.saveDepartment(department).success(function(data){
			alert(data);
			$location.path('/listDepartments');
		});
	}
})
.controller("studentsController", function($scope,$rootScope, allStudents, allDepartments){
	$scope.name="All Departments";
	$scope.departments=allDepartments;
	$scope.students=allStudents;
	$rootScope.activeTab='students';
})
.controller("oneStudent", function(allDepartments, oneStudent, $scope, $rootScope, StudentFactory, $location){
		$scope.departments=allDepartments;
		$scope.student=oneStudent;
		$rootScope.activeTab='students';
		$scope.student.dateOfBirth=new Date($scope.student.dateOfBirth);
	$scope.saveStudent=function(student){
		StudentFactory.saveStudent(student).success(function(data){
			alert(data);
			$location.path('/listStudents');
		});
	}
});

