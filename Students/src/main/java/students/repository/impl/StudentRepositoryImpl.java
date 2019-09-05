package students.repository.impl;

import students.repository.StudentRepository;
import org.springframework.stereotype.Repository;
import students.model.Student;

@Repository
public class StudentRepositoryImpl extends GenericJpaRepository<Student, Long> implements StudentRepository {

	public StudentRepositoryImpl() {
		super(Student.class);
	}

}

