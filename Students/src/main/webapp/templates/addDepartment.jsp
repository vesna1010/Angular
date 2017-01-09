<div class="row">
	<h3 class="text-center">Add New Course</h3>
	<br>
	<form class="form-horizontal" name="courseForm">
		<div class="form-group">
			<label for="courseName"
				class="control-label col-sm-2 col-sm-offset-3">Course name:
			</label>
			<div class="col-sm-4">
				<input class="form-control" type="text" name="courseName"
					ng-model="course.courseName" ng-required="true" ng-minlength="5"
					ng-pattern="/^([a-zA-Z0-9]+\s?){5,}$/"> <span
					ng-show="courseForm.courseName.$dirty && courseForm.courseName.$error.required"
					class="text-danger"> Enter course name. <br> </span> <span
					ng-show="courseForm.courseName.$dirty && courseForm.courseName.$error.minlength"
					class="text-danger"> Course name must minimum 5 characters
					long. <br></span> <span
					ng-show="courseForm.courseName.$dirty && courseForm.courseName.$error.pattern"
					class="text-danger"> Enter only alphabetical letters, numbers and spaces. </span>
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-4 col-sm-offset-5">
				<button type="submit" class="btn btn-default"
					ng-click="saveCourse(course)" ng-disabled="courseForm.$invalid">
					Save/Update Course</button>
			</div>
		</div>
	</form>
</div>

