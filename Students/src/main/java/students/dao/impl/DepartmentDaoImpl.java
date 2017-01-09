package students.dao.impl;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import students.dao.DepartmentDao;
import students.model.*;

@Transactional
@Component
public class DepartmentDaoImpl implements DepartmentDao{
	
	@Autowired
	private SessionFactory session;

	public Session getSession() {
		return session.getCurrentSession();
	}
	
	@Override
	public Department getDepartmentById(long id) {
		Query query=getSession().createQuery("from Department where id=:id");
		query.setLong("id", id);
		return (Department) query.uniqueResult();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Department> getDepartments() {
		Query query=getSession().createQuery("from Department");
		return query.list();
	}

	@Override
	public void saveOrUpdateDepartment(Department department) {
		getSession().saveOrUpdate(department);
	}

	@Override
	public void deleteDepartment(long id) {
		getSession().delete(getDepartmentById(id));
	}

}
