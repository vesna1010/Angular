package students.repository.impl;

import org.springframework.stereotype.Repository;
import students.model.Department;
import students.repository.DepartmentRepository;

@Repository
public class DepartmentRepositoryImpl extends GenericJpaRepository<Long, Department> implements DepartmentRepository {

	public DepartmentRepositoryImpl() {
		setEntityClass(Department.class);
	}

}
