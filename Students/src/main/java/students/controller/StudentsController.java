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
@RequestMapping("/students")
public class StudentsController {

	@Autowired
	public StudentService studentService;

	@RequestMapping(method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Student> findAllStudents() {
		return studentService.findAllStudents();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public Student findStudentById(@PathVariable Long id) {
		return studentService.findStudentById(id);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE, 
			produces = MediaType.TEXT_PLAIN_VALUE)
	public String deleteStudentById(@PathVariable Long id) {
		studentService.deleteStudentById(id);

		return "Student has been successfully deleted!";
	}

	@RequestMapping(method = RequestMethod.POST, 
			consumes = MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.TEXT_PLAIN_VALUE)
	public String saveStudent(@RequestBody Student student) {
		studentService.saveStudent(student);

		return "Student has been successfully saved!";
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT, 
			consumes = MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.TEXT_PLAIN_VALUE)
	public String updateStudent(@RequestBody Student student, @PathVariable Long id) {
		studentService.updateStudent(student, id);

		return "Student has been successfully updated!";
	}

}
