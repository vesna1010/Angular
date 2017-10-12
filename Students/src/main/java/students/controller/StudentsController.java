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
		return studentService.findAll();
	}
	
	@RequestMapping(value = "/findStudent/{id}", method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public Student findStudent(@PathVariable long id) {
		return studentService.find(id);
	}
	
	@RequestMapping(value = "/deleteStudent/{id}", method = RequestMethod.DELETE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Student> deleteStudent(@PathVariable long id) {
		studentService.delete(id);
		
		return studentService.findAll();
	}
	
	@RequestMapping(value = "/saveStudent", method = RequestMethod.POST, 
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String saveOrUpdateStudent(@RequestBody Student student) {
		studentService.save(student);
		
		return "Student has been successfully saved!";
	}
	
	@RequestMapping(value = "/updateStudent", method = RequestMethod.PUT, 
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateStudent(@RequestBody Student student) {
		studentService.update(student);
		
		return "Student has been successfully updated!";
	}
	
}
