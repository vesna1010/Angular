app.filter("filterDepartment", function() {

	return function(students, name) {
		var filteredStudents = [];
		
		if (name == "All Departments") {
			return students;
		}
		
		angular.forEach(students, function(student) {
			if (student.department.title == name) {
				filteredStudents.push(student);
			}
		});
		
		return filteredStudents;
	}
});
