package students.service;

import java.util.List;

import students.model.Department;

public interface DepartmentService {
	
	
	List<Department> findAllDepartments();
	
	Department findDepartmentById(Long id);

	void saveDepartment(Department department);
	
	void updateDepartment(Department department);
	
	void deleteDepartmentById(Long id);

}

