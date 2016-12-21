var myApp=angular.module("app", ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.caseInsensitiveMatch=true;
	$routeProvider
	.when("/", {
		templateUrl:'/Students/templates/home.jsp',
		controller:'homeController'
	})
	.when("/listCourses", {
		templateUrl:'/Students/templates/courses.jsp',
		controller:'coursesController',
		resolve:{
			allCourses: function(CoursesFactory) {
				return CoursesFactory.getCourses();
			}
		}
	})
	.when("/removeCourseById/:id", {
		templateUrl:'/Students/templates/courses.jsp',
		controller:'coursesController',
		resolve:{
			allCourses: function(CoursesFactory) {
				return CoursesFactory.removeCourse();
			}
		}
	})
	.when("/getCourseById/:id", {
		templateUrl:'/Students/templates/addCourse.jsp',
		controller:'oneCourseController',
		resolve:{
			oneCourse:function(CoursesFactory) {
			return CoursesFactory.getOneCourse();	
			}
		}
	})
	.when("/addNewCourse", {
		templateUrl:'/Students/templates/addCourse.jsp',
		controller:'oneCourseController',
		resolve:{
			oneCourse:function(){
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
			allCourses: function(CoursesFactory) {
				return CoursesFactory.getCourses();
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
			allCourses: function(CoursesFactory) {
				return CoursesFactory.getCourses();
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
			allCourses: function(CoursesFactory) {
				return CoursesFactory.getCourses();
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
			allCourses: function(CoursesFactory) {
				return CoursesFactory.getCourses();
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
.controller("coursesController", function($scope,$rootScope, allCourses){
	$scope.courses=allCourses;
	$rootScope.activeTab='courses';
})
.controller("oneCourseController", function(CoursesFactory, $scope,$rootScope, oneCourse, $location){
	$scope.course=oneCourse;
	$rootScope.activeTab='courses';
	$scope.saveCourse=function(course){
		CoursesFactory.saveCourse(course).success(function(data){
			alert(data);
			$location.path('/listCourses');
			
			
		});
	}
})
.controller("studentsController", function($scope,$rootScope, allStudents, allCourses){
	$scope.name="All Courses";
	$scope.courses=allCourses;
	$scope.students=allStudents;
	$rootScope.activeTab='students';
})
.controller("oneStudent", function(allCourses, oneStudent, $scope, $rootScope, StudentFactory, $location){
		$scope.courses=allCourses;
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

