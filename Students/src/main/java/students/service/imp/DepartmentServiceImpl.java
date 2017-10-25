package students.service.imp;

import java.util.List;
import javax.inject.Inject;
import org.springframework.stereotype.Service;
import students.model.*;
import students.repository.DepartmentRepository;
import students.service.DepartmentService;

@Service
public class DepartmentServiceImpl implements DepartmentService {

	
	@Inject
	private DepartmentRepository departmentRepository;

	@Override
	public List<Department> findAllDepartments() {
		return departmentRepository.findAll();
	}

	@Override
	public Department findDepartmentById(Long id) {
		return departmentRepository.findOne(id);
	}

	@Override
	public void saveDepartment(Department department) {
		departmentRepository.save(department);
	}

	@Override
	public void updateDepartment(Department department) {
		departmentRepository.update(department);
	}

	@Override
	public void deleteDepartmentById(Long id) {
		departmentRepository.deleteById(id);
	}

}
