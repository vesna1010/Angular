package students.service;

import java.util.List;

import students.model.Student;

public interface StudentService {

	
	List<Student> findAll();
	
	Student find(long studentId);

	void delete(long studentId);

	void save(Student student);
	
	void update(Student student);
	
}
