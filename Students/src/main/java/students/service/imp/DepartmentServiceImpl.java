package students.service.imp;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import students.dao.DepartmentDao;
import students.model.*;
import students.service.DepartmentService;

public class DepartmentServiceImpl implements DepartmentService {

	
	@Autowired
	private DepartmentDao departmentDao;

	@Override
	public Department find(long departmentId) {
		return departmentDao.find(departmentId);
	}

	@Override
	public List<Department> findAll() {
		return departmentDao.findAll();
	}

	@Override
	public void save(Department department) {
		departmentDao.save(department);
	}
	
	@Override
	public void update(Department department) {
		departmentDao.update(department);
	}

	@Override
	public void delete(long departmentId) {
		departmentDao.delete(departmentId);
	}

}
