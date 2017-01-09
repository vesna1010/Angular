package students.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import students.model.Department;
import students.service.DepartmentService;


@RestController
public class DepartmentController {

	@Autowired
	public DepartmentService departmentService;
	
	@RequestMapping("/getDepartments")
	public List<Department> getCourses() {
		return departmentService.getDepartments();
	}
	
	@RequestMapping("/getDepartmentById")
	public Department getCourseById(@RequestParam("id") long id) {
		return departmentService.getDepartmentById(id);
	}
	
	@RequestMapping("/deleteDepartmentById")
	public List<Department> deleteCourseById(@RequestParam("id") long id) {
		 departmentService.deleteDepartment(id);
		 return departmentService.getDepartments();
	}
	
	@RequestMapping(value="/saveDepartment", method=RequestMethod.POST, 
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String deleteCourseById(@RequestBody Department department){
		departmentService.saveOrUpdateDepartment(department);
		return "Department has been successfully saved!";
	}
	
}
