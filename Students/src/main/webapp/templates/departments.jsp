<div class="row">
<div class="col-sm-10  col-sm-offset-1">
<br><br>
	<a href="#/addNewCourse" class="btn btn-success"><span
		class="glyphicon glyphicon-plus"></span> <b>Add Course</b></a> 
		<div class="table-responsive" ng-show="courses.length>0">
	<table  class="table table-striped table-bordered">
		<tr class="success">
			<td>ID</td>
			<td>COURSE</td>
			<td>UPDATE</td>
		</tr>
		<tr ng-repeat="course in courses">
			<td>{{course.id}}</td>
			<td>{{course.courseName}}</td>
			<td><a href="#/getCourseById/{{course.id}}"
				class="btn btn-danger btn-sm"><span
					class="glyphicon glyphicon-pencil"></span> <b>Edit</b></a>
				<a href="#/removeCourseById/{{course.id}}"
					class="btn btn-primary btn-sm">
					<span class="glyphicon glyphicon-remove"></span> <b>Delete</b>
				</a></td>
		</tr>
	</table>
	</div>
</div>
</div>