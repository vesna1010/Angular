package students.service.imp;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import students.dao.CourseDao;
import students.model.Course;
import students.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	private CourseDao courseDao;

	@Override
	public Course getCourseById(long id) {
		return courseDao.getCourseById(id);
	}

	@Override
	public List<Course> getCourses() {
		return courseDao.getCourses();
	}

	@Override
	public void saveOrUpdateCourse(Course course) {
		courseDao.saveOrUpdateCourse(course);
	}

	@Override
	public void deleteCourse(long id) {
		courseDao.deleteCourse(id);
	}

}
