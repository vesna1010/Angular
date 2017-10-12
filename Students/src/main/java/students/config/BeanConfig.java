package students.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import students.dao.DepartmentDao;
import students.dao.StudentDao;
import students.dao.impl.DepartmentDaoImpl;
import students.dao.impl.StudentDaoImpl;
import students.service.DepartmentService;
import students.service.StudentService;
import students.service.imp.DepartmentServiceImpl;
import students.service.imp.StudentServiceImpl;

@Configuration
public class BeanConfig {

	@Bean
	public DepartmentDao departmentDao() {
		return new DepartmentDaoImpl();
	}
	
	@Bean
	public DepartmentService departmentService() {
		return new DepartmentServiceImpl();
	}
	
	@Bean
	public StudentDao studentDao() {
		return new StudentDaoImpl();
	}
	
	@Bean
	public StudentService studentService() {
		return new StudentServiceImpl();
	}
	
}
