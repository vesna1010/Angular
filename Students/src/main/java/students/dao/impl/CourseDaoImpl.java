package students.dao.impl;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import students.dao.CourseDao;
import students.model.Course;

@Transactional
@Component
public class CourseDaoImpl implements CourseDao {
	
	@Autowired
	private SessionFactory session;

	public Session getSession() {
		return session.getCurrentSession();
	}
	
	@Override
	public Course getCourseById(long id) {
		Query query=getSession().createQuery("from Course where id=:id");
		query.setLong("id", id);
		return (Course) query.uniqueResult();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Course> getCourses() {
		Query query=getSession().createQuery("from Course");
		return query.list();
	}

	@Override
	public void saveOrUpdateCourse(Course course) {
		 Course course1=getCourseById(course.getId());
		if(course1==null)
			getSession().save(course);
		else{
			Query query=getSession().createQuery("UPDATE Course set courseName=:courseName where id=:id");
			query.setParameter("courseName", course.getCourseName());
			query.setParameter("id", course.getId());
			query.executeUpdate();
		}
	}

	@Override
	public void deleteCourse(long id) {
		getSession().delete(getCourseById(id));
	}

}
