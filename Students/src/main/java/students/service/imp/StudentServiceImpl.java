package students.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import students.dao.StudentDao;
import students.model.Student;
import students.service.StudentService;
@Service
public class StudentServiceImpl implements StudentService {
	@Autowired
	private StudentDao studentDao;

	@Override
	public Student getStudent(long id) {
	return studentDao.getStudent(id);
	}

	@Override
	public List<Student> getStudents() {
		return studentDao.getStudents();
	}

	@Override
	public void deleteStudent(long id) {
		studentDao.deleteStudent(id);

	}

	@Override
	public void saveOrUpdateStudent(Student student) {
		studentDao.saveOrUpdateStudent(student);

	}

}
