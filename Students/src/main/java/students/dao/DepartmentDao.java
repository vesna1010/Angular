package students.dao;

import java.util.List;
import students.model.Department;

public interface DepartmentDao {
	
	Department getDepartmentById(long id);

	List<Department> getDepartments();

	void saveOrUpdateDepartment(Department department);

	void deleteDepartment(long id);

}
