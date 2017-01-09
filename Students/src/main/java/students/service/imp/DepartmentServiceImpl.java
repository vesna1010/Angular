package students.service.imp;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import students.model.*;
import students.dao.DepartmentDao;
import students.service.DepartmentService;

@Service
public class DepartmentServiceImpl implements DepartmentService {
	
	@Autowired
	private DepartmentDao courseDao;

	@Override
	public Department getDepartmentById(long id) {
		return courseDao.getDepartmentById(id);
	}

	@Override
	public List<Department> getDepartments() {
		return courseDao.getDepartments();
	}

	@Override
	public void saveOrUpdateDepartment(Department department) {
		courseDao.saveOrUpdateDepartment(department);
	}

	@Override
	public void deleteDepartment(long id) {
		courseDao.deleteDepartment(id);
	}

}
