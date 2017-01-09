package students.service;

import java.util.List;
import students.model.Department;

public interface DepartmentService {
	
	Department getDepartmentById(long id);

	List<Department> getDepartments();

	void saveOrUpdateDepartment(Department department);

	void deleteDepartment(long id);

}

