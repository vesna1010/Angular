package students.service;

import java.util.List;

import students.model.Student;

public interface StudentService {
Student getStudent(long id);
List<Student> getStudents();
void deleteStudent(long id);
void saveOrUpdateStudent(Student student);
	
}
