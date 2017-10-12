package students.service.imp;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import students.dao.StudentDao;
import students.model.Student;
import students.service.StudentService;

public class StudentServiceImpl implements StudentService {

	
	@Autowired
	private StudentDao studentDao;

	@Override
	public Student find(long studentId) {
		return studentDao.find(studentId);
	}

	@Override
	public List<Student> findAll() {
		return studentDao.findAll();
	}

	@Override
	public void delete(long studentId) {
		studentDao.delete(studentId);
	}

	@Override
	public void save(Student student) {
		studentDao.save(student);
	}

	@Override
	public void update(Student student) {
		studentDao.update(student);
	}

}
