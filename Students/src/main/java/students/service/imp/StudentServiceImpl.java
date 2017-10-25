package students.service.imp;

import java.util.List;
import javax.inject.Inject;
import org.springframework.stereotype.Service;
import students.model.Student;
import students.repository.StudentRepository;
import students.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

	
	@Inject
	private StudentRepository studentRepository;

	@Override
	public List<Student> findAllStudents() {
		return studentRepository.findAll();
	}

	@Override
	public Student findStudentById(Long id) {
		return studentRepository.findOne(id);
	}

	@Override
	public void deleteStudentById(Long id) {
		studentRepository.deleteById(id);
	}

	@Override
	public void saveStudent(Student student) {
		studentRepository.save(student);
	}

	@Override
	public void updateStudent(Student student) {
		studentRepository.update(student);
	}
	
}
