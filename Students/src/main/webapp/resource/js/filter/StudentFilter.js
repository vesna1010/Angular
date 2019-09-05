var app = angular.module('app');

app.filter("filterDepartment", function() {

	return function(students, departmentId) {
		if (departmentId > 0) {
			students = students.filter(function(student) {
				return (student.department.id == departmentId);
			});
		}

		return students;
	}
});

