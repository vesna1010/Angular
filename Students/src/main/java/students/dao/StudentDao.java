package students.dao;

import java.util.List;

import students.model.Student;

public interface StudentDao {
	Student getStudent(long id);

	List<Student> getStudents();

	void deleteStudent(long id);

	void saveOrUpdateStudent(Student student);

}
