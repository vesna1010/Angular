package students.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import students.service.DepartmentService;
import students.model.Department;

@RestController
public class DepartmentController {

	@Autowired
	public DepartmentService departmentService;

	@RequestMapping(value = "/findAllDepartments", method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Department> findAllDepartments() {
		return departmentService.findAllDepartments();
	}

	@RequestMapping(value = "/findDepartment/{id}", method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public Department findDepartment(@PathVariable Long id) {
		return departmentService.findDepartmentById(id);
	}

	@RequestMapping(value = "/deleteDepartment/{id}", method = RequestMethod.DELETE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Department> deleteStudent(@PathVariable Long id) {
		departmentService.deleteDepartmentById(id);
		
		return departmentService.findAllDepartments();
	}

	@RequestMapping(value = "/saveDepartment", method = RequestMethod.POST, 
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String saveDepartment(@RequestBody Department department) {
		departmentService.saveDepartment(department);

		return "Department has been successfully saved!";
	}

	@RequestMapping(value = "/updateDepartment", method = RequestMethod.PUT, 
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateDepartment(@RequestBody Department department) {
		departmentService.updateDepartment(department);

		return "Department has been successfully updated!";
	}

}
