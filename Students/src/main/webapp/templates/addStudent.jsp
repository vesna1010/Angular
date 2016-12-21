<div class="row">
<h3 class="text-center">Add New Student</h3>
<br>
<form class="form-horizontal" name="studentForm">
	<div class="form-group">
		<label for="studentName"
			class="control-label col-sm-2 col-sm-offset-3">Student name:
		</label>
		<div class="col-sm-4">
			<input ng-model="student.studentName" type="text"
				class="form-control" name="studentName" ng-required="true"
				ng-pattern="/^([a-zA-Z]+\s?){5,}$/" /> <span
				ng-show="studentForm.studentName.$dirty && studentForm.studentName.$error.required"
				class="text-danger"> Enter student name. <br></span> <span
				ng-show="studentForm.studentName.$dirty && studentForm.studentName.$error.pattern"
				class="text-danger"> Enter correct name. </span>
		</div>
	</div>
	<div class="form-group">
		<label for="fatherName" class="control-label col-sm-2 col-sm-offset-3">Father
			name: </label>
		<div class="col-sm-4">
			<input ng-model="student.fatherName" type="text" class="form-control"
				name="fatherName" ng-required="true" ng-pattern="/^([a-zA-Z]+\s?){5,}$/" /> <span
				ng-show="studentForm.fatherName.$dirty && studentForm.fatherName.$error.required"
				class="text-danger"> Enter father name. <br> </span> <span
				ng-show="studentForm.fatherName.$dirty && studentForm.fatherName.$error.pattern"
				class="text-danger"> Enter correct father name. </span>
		</div>
	</div>
	<div class="form-group">
		<label for="gender" class="control-label col-sm-2 col-sm-offset-3">Gender:
		</label>
		<div class="col-sm-4">
			<select class="form-control" ng-model="student.gender" name="gender"
				ng-required="true">
				<option value="Male">Male</option>
				<option value="Female">Female</option>
			</select> 
			<span ng-show="studentForm.gender.$error.required"
				class="text-danger"> Select gender. </span>
		</div>
	</div>
	<div class="form-group">
		<label for="course" class="control-label col-sm-2 col-sm-offset-3">Course:
		</label>
		<div class="col-sm-4">
			<select class="form-control" ng-model="student.course.id"
				name="course" ng-required="true"
				ng-options="course.id as course.courseName for course in courses"
				>
			</select> 
			<span ng-show="studentForm.gender.$error.required "
				class="text-danger"> Select course. </span>
		</div>
	</div>
	<div class="form-group">
		<label for="yearOfStudy"
			class="control-label col-sm-2 col-sm-offset-3">Year Of Study:
		</label>
		<div class="col-sm-4">
			<input ng-model="student.yearOfStudy" type="text"
				class="form-control" name="yearOfStudy" ng-required="true"
				ng-pattern="/^[1-3]$/" /> <span
				ng-show="studentForm.yearOfStudy.$dirty && studentForm.yearOfStudy.$error.required"
				class="text-danger"> Enter year.</span> <span
				ng-show="studentForm.yearOfStudy.$dirty && studentForm.yearOfStudy.$error.pattern"
				class="text-danger"> Year must be between 1 and 3. </span>
		</div>
	</div>
	<div class="form-group">
		<label for="dateOfBirth"
			class="control-label col-sm-2 col-sm-offset-3">Date Of Birth:
		</label>
		<div class="col-sm-4">
			<input ng-model="student.dateOfBirth" type="date"
				class="form-control" name="dateOfBirth" ng-required="true" /> <span
				ng-show="studentForm.dateOfBirth.$dirty && studentForm.dateOfBirth.$error.date"
				class="text-danger"> Enter date. </span>
		</div>
	</div>
	<div class="form-group">
		<label for="address" class="control-label col-sm-2 col-sm-offset-3">Address:
		</label>
		<div class="col-sm-4">
			<input ng-model="student.address" type="text" class="form-control"
				name="address" ng-required="true" ng-pattern="/^[a-zA-Z0-9\s\,]{10,}$/" /> <span
				ng-show="studentForm.address.$dirty && studentForm.address.$error.required"
				class="text-danger"> Enter address. <br> </span> <span
				ng-show="studentForm.address.$dirty && studentForm.address.$error.pattern"
				class="text-danger"> Enter valid address. </span>
		</div>
	</div>
	<div class="form-group">
		<div class="col-sm-4 col-sm-offset-5">
			<button type="submit" class="btn btn-default"
				ng-click="saveStudent(student)" ng-disabled="studentForm.$invalid">
				Save/Update Student</button>
		</div>
		</div>
</form>
</div>
