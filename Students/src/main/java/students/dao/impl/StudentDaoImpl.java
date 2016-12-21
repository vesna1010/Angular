package students.dao.impl;

import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import students.dao.StudentDao;
import students.model.Student;

@Transactional
@Component
public class StudentDaoImpl implements StudentDao {
	
	@Autowired
	private SessionFactory session;

	public Session getSession() {
		return session.getCurrentSession();
	}

	@Override
	public Student getStudent(long id) {
		return getSession().get(Student.class, id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Student> getStudents() {
		return getSession().createCriteria(Student.class).list();
	}

	@Override
	public void deleteStudent(long id) {
		getSession().delete(getStudent(id));
	}

	@Override
	public void saveOrUpdateStudent(Student student) {
		getSession().saveOrUpdate(student);
	}

}
