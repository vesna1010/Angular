var app = angular.module('app');

app.factory('DepartmentFactory', function($http) {
	
	return {
		findAllDepartments : findAllDepartments,
		findDepartmentById : findDepartmentById,
		saveDepartment : saveDepartment,
		updateDepartment : updateDepartment,
		deleteDepartmentById : deleteDepartmentById
	};
	
	function findAllDepartments() {
		return $http.get('departments').then(function(response){
			return response.data;
		});	
	}
		
	function findDepartmentById(id) {
		return $http.get('departments/' + id).then(function(response){
			return response.data;
		});	
	}
		
	function saveDepartment(department) {
		return $http.post('departments', department).then(function(response){
			return response.data;
		});	
	}
	
	function updateDepartment(department, id) {
		return $http.put('departments/' + id, department).then(function(response){
			return response.data;
		});			
	}
	
	function deleteDepartmentById(id) {
		return $http.delete('departments/'+id).then(function(response){
			return response.data;
		});		
	}
	
});

