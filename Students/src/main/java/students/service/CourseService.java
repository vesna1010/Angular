package students.service;
import java.util.List;

import students.model.Course;

public interface CourseService {
Course getCourseById(long id);
List<Course> getCourses();
void saveOrUpdateCourse(Course course);
void deleteCourse(long id);




}
