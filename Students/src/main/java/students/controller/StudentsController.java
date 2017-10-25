package students.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import students.model.Student;
import students.service.StudentService;

@RestController
public class StudentsController {

	@Autowired
	public StudentService studentService;

	@RequestMapping(value = "/findAllStudents", method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Student> findAllStudents() {
		return studentService.findAllStudents();
	}
	
	@RequestMapping(value = "/findStudent/{id}", method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public Student findStudent(@PathVariable Long id) {
		return studentService.findStudentById(id);
	}
	
	@RequestMapping(value = "/deleteStudent/{id}", method = RequestMethod.DELETE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Student> deleteStudent(@PathVariable Long id) {
		studentService.deleteStudentById(id);
		
		return studentService.findAllStudents();
	}
	
	@RequestMapping(value = "/saveStudent", method = RequestMethod.POST, 
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String saveOrUpdateStudent(@RequestBody Student student) {
		studentService.saveStudent(student);
		
		return "Student has been successfully saved!";
	}
	
	@RequestMapping(value = "/updateStudent", method = RequestMethod.PUT, 
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateStudent(@RequestBody Student student) {
		studentService.updateStudent(student);
		
		return "Student has been successfully updated!";
	}
	
}
