var app = angular.module('app');

app.factory('StudentFactory', function($http) {
	
	return {
		findAllStudents : findAllStudents,
		findStudentById : findStudentById,
		saveStudent : saveStudent,
		updateStudent : updateStudent,
		deleteStudentById : deleteStudentById
	};
	
	function findAllStudents() {
		return $http.get('students').then(function(response){
			return response.data;
		});		
	}
	
	function findStudentById(id) {
		return $http.get('students/' + id).then(function(response){
			return response.data;
		});	
	}
	
	function saveStudent(student) {
		return $http.post('students', student).then(function(response){
			alert(response.data);
		});		
	}
	
	function updateStudent(student, id) {
		return $http.put('students/' + id, student).then(function(response){
			alert(response.data);
		});		
	}
	
	function deleteStudentById(id) {
		return $http.delete('students/'+ id).then(function(response){
			alert(response.data);
		});		
	}
	
});

