app.factory('DepartmentFactory', function($http, $route) {
	return {
		findAllDepartments : function() {
			return $http.get('findAllDepartments').then(function(response) {
				return response.data;
			});	
		},
		findDepartmentById : function() {
			return $http.get('findDepartment/' + $route.current.params.id).then(function(response) {
				return response.data;
			});
		},
		saveDepartment : function(department) {
			return $http.post('saveDepartment', JSON.stringify(department), {
				responseType:'text',
				transformResponse: angular.identity,
			});
		},
		updateDepartment : function(department) {
			return $http.put('updateDepartment', JSON.stringify(department), {
				responseType : 'text',
				transformResponse: angular.identity,	
			});		
		},
		deleteDepartmentById : function() {
			return $http.delete('deleteDepartment/'+ $route.current.params.id, {
				responseType : 'json',
				transformResponse: angular.identity,
			}).then(function(response) {
				return response.data;
			});	
		}
	}
});





