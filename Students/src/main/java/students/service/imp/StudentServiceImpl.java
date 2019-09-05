package students.service.imp;

import java.util.List;
import javax.inject.Inject;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;
import students.model.Student;
import students.repository.StudentRepository;
import students.service.StudentService;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {

	@Inject
	private StudentRepository studentRepository;

	@Override
	public List<Student> findAllStudents() {
		return studentRepository.findAll();
	}

	@Override
	public Student findStudentById(Long id) {
		if (!studentRepository.existsById(id)) {
			throw new RuntimeException("No student with id " + id);
		}

		return studentRepository.findOne(id);
	}

	@Override
	public void deleteStudentById(Long id) {
		if (!studentRepository.existsById(id)) {
			throw new RuntimeException("No student with id " + id);
		}

		studentRepository.deleteById(id);
	}

	@Override
	public void saveStudent(Student student) {
		studentRepository.save(student);
	}

	@Override
	public void updateStudent(Student student, Long id) {
		if (!studentRepository.existsById(id)) {
			throw new RuntimeException("No student with id " + id);
		}

		studentRepository.update(student);
	}

}

