package students.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import students.model.Student;
import students.service.StudentService;

@RestController
public class StudentsController {

	@Autowired
	public StudentService studentService;

	@RequestMapping("/getStudents")
	public List<Student> getStudents() {
		return studentService.getStudents();
	}
	
	@RequestMapping("/getStudentById")
	public Student getStudentById(@RequestParam("studentId") long studentId) {
		return studentService.getStudent(studentId);
	}
	
	@RequestMapping("/deleteStudentById")
	public List<Student> deleteStudentById(@RequestParam("studentId") long studentId) {
		studentService.deleteStudent(studentId);
		return studentService.getStudents();
	}
	
	@RequestMapping(value="/saveStudent", method=RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public String deletestudentById(@RequestBody Student student) {
		studentService.saveOrUpdateStudent(student);
		return "Student has been successfully saved!";
	}
}
