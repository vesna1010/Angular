package students.service.imp;

import java.util.List;
import javax.inject.Inject;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;
import students.model.*;
import students.repository.DepartmentRepository;
import students.service.DepartmentService;

@Service
@Transactional
public class DepartmentServiceImpl implements DepartmentService {

	@Inject
	private DepartmentRepository departmentRepository;

	@Override
	public List<Department> findAllDepartments() {

		return departmentRepository.findAll();
	}

	@Override
	public Department findDepartmentById(Long id) {
		if (!departmentRepository.existsById(id)) {
			throw new RuntimeException("No department with id " + id);
		}

		return departmentRepository.findOne(id);
	}

	@Override
	public void saveDepartment(Department department) {
		departmentRepository.save(department);
	}

	@Override
	public void updateDepartment(Department department, Long id) {
		if (!departmentRepository.existsById(id)) {
			throw new RuntimeException("No department with id " + id);
		}

		departmentRepository.update(department);
	}

	@Override
	public void deleteDepartmentById(Long id) {
		if (!departmentRepository.existsById(id)) {
			throw new RuntimeException("No department with id " + id);
		}

		departmentRepository.deleteById(id);
	}

}

