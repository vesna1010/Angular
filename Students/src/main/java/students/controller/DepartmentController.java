package students.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import students.model.Course;
import students.service.CourseService;

@RestController
public class CourseController {

	@Autowired
	public CourseService courseService;
	
	@RequestMapping("/getCourses")
	public List<Course> getCourses() {
		return courseService.getCourses();
	}
	
	@RequestMapping("/getCourseById")
	public Course getCourseById(@RequestParam("id") long id) {
		return courseService.getCourseById(id);
	}
	
	@RequestMapping("/deleteCourseById")
	public List<Course> deleteCourseById(@RequestParam("id") long id) {
		 courseService.deleteCourse(id);
		 return courseService.getCourses();
	}
	
	@RequestMapping(value="/saveCourse", method=RequestMethod.POST, 
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public String deleteCourseById(@RequestBody Course course){
		courseService.saveOrUpdateCourse(course);
		return "Course has been successfully saved!";
	}
	
}
