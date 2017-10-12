package students.dao;

import java.util.List;

import students.model.Department;

public interface DepartmentDao {
	
	
	List<Department> findAll();
	
	Department find(long departmentId);

	void save(Department department);
	
	void update(Department department);
	
	void delete(long departmentId);

}
