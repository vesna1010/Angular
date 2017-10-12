app.factory('StudentFactory', function($http, $route) {
	return {
		findAllStudents : function() {
			return $http.get('findAllStudents').then(function(response) {
				return response.data;
			});	
		},
		findStudentById : function() {
			return $http.get('findStudent/' + $route.current.params.id).then(function(response) {
				return response.data;
			});
		},
		saveStudent : function(student) {
			return $http.post('saveStudent', JSON.stringify(student), {
				responseType:'text',
				transformResponse: angular.identity
			});		
		},
		updateStudent : function(student) {
			return $http.put('updateStudent', JSON.stringify(student), {
				responseType:'text',
				transformResponse: angular.identity
			});		
		},
		deleteStudentById : function() {
			return $http.delete('deleteStudent/'+ $route.current.params.id, {
				responseType : 'json',
				transformResponse: angular.identity,
			}).then(function(response) {
				return response.data;
			});	
		}
	}
});
