myApp.factory("CoursesFactory", function($http, $route ){
	return{
		getCourses: function(){
			return $http.get('/Students/getCourses').then(function(response){
				return response.data;
			 });	
		},
		getOneCourse:function(){
			return	$http({
				url:'/Students/getCourseById',
				method:'get',
				params: {id:$route.current.params.id}
			}).then(function(response){
				return response.data;
			 });
		},
		saveCourse: function(course){
			return $http({
				url:'/Students/saveCourse',
				method:'post',
				data:JSON.stringify(course),
				responseType:'text',
				transformResponse: angular.identity,
			    headers: {
			    	  "Content-Type": "application/json"
			      }
			});
		},
		removeCourse:function(){
			return  $http({
				url:"/Students/deleteCourseById",
				method:'get',
				params: {id:$route.current.params.id}
			}).then(function(response){
				return response.data;
			 });
		}
	}
});

myApp.factory("StudentFactory", function($http, $route){
	return{
		getStudents: function(){
			return $http.get('/Students/getStudents').then(function(response){
				return response.data;
			 });
		},
		getStudentById:function(){
		return	$http({
				url:"/Students/getStudentById",
				method:'get',
				params: {studentId:$route.current.params.studentId}
			}).then(function(response){
				return response.data;
			});
		},
		saveStudent:function(student){
			return	$http({
				method:'post',
				url:'/Students/saveStudent',
				data:JSON.stringify(student),
				transformResponse: angular.identity,
			      headers: {
			    	  "Content-Type": "application/json"
			      }
			})
		},
		removeStudent:function(){
			return  $http({
				url:"/Students/deleteStudentById",
				method:'get',
				params: {studentId:$route.current.params.studentId}
			}).then(function(response){
				return response.data;
			 });
		}
	}
});