package students.service;

import java.util.List;
import students.model.Student;

public interface StudentService {

	List<Student> findAllStudents();

	Student findStudentById(Long id);

	void deleteStudentById(Long id);

	void saveStudent(Student student);

	void updateStudent(Student student, Long id);

}

