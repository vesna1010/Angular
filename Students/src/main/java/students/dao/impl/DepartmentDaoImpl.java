package students.dao.impl;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import students.dao.DepartmentDao;
import students.model.*;

@Transactional
public class DepartmentDaoImpl implements DepartmentDao {

	@Autowired
	private SessionFactory session;

	private Session getSession() {
		return session.getCurrentSession();
	}

	@Override
	public Department find(long id) {
		Query query = getSession().createQuery("from Department where id=:id");
		
		query.setLong("id", id);

		return (Department) query.uniqueResult();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Department> findAll() {
		Query query = getSession().createQuery("from Department");

		return query.list();
	}

	@Override
	public void save(Department department) {
		getSession().save(department);
	}
	
	@Override
	public void update(Department department) {
		getSession().update(department);
	}

	@Override
	public void delete(long departmentId) {
		getSession().delete(find(departmentId));
	}

}
