package students.dao.impl;

import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import students.dao.StudentDao;
import students.model.Student;

@Transactional
public class StudentDaoImpl implements StudentDao {

	
	@Autowired
	private SessionFactory session;

	private Session getSession() {
		return session.getCurrentSession();
	}

	@Override
	public Student find(long studentId) {
		return getSession().get(Student.class, studentId);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Student> findAll() {
		return getSession().createCriteria(Student.class).list();
	}

	@Override
	public void delete(long studentId) {
		getSession().delete(find(studentId));
	}

	@Override
	public void save(Student student) {
		getSession().save(student);
	}
	
	@Override
	public void update(Student student) {
		getSession().update(student);
	}
	
}
