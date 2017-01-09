myApp.factory("DepartmentsFactory", function($http, $route ){
	return{
		getDepartments: function(){
			return $http.get('/Students/getDepartments').then(function(response){
				return response.data;
			 });	
		},
		getOneDepartment:function(){
			return	$http({
				url:'/Students/getDepartmentById',
				method:'get',
				params: {id:$route.current.params.id}
			}).then(function(response){
				return response.data;
			 });
		},
		saveDepartment: function(department){
			return $http({
				url:'/Students/saveDepartment',
				method:'post',
				data:JSON.stringify(department),
				responseType:'text',
				transformResponse: angular.identity,
			    headers: {
			    	  "Content-Type": "application/json"
			      }
			});
		},
		removeDepartment:function(){
			return  $http({
				url:"/Students/deleteDepartmentById",
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
