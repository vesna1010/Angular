package students.dao;

import java.util.List;

import students.model.Course;

public interface CourseDao {
	Course getCourseById(long id);

	List<Course> getCourses();

	void saveOrUpdateCourse(Course course);

	void deleteCourse(long id);

}
