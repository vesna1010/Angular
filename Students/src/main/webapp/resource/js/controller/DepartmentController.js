app.controller("DepartmentsController", 
		function($scope, $rootScope, departments) {
	
	$rootScope.activeTab = 'departments';
	$scope.departments = departments;
	
});

app.controller("OneDepartmentController", 
		function($scope, $rootScope, $location, DepartmentFactory, department) {
	
	$rootScope.activeTab = 'departments';
	$scope.department = department;
	
	$scope.saveOrUpdateDepartment = function(department) {
		var func = department.id == undefined ? DepartmentFactory.saveDepartment :
			DepartmentFactory.updateDepartment;
		
		func(department).success(function(message) {
			showMessage(message);
		});
	}
	
	function showMessage(message) {
		alert(message);
		$location.path("/departments");
	}
});









