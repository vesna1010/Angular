<div class="row">
	<div class="col-sm-3 col-sm-offset-8">
		<div class="input-group">
			<input type="text" class="form-control search"
				placeholder="Search for student" ng-model="searchText.studentName"/> <span class="input-group-addon">
				<span class="glyphicon glyphicon-search"></span>
			</span>
		</div>
		<br>
	</div>
</div>
<div class="row">
<div class="col-sm-10  col-sm-offset-1">
	<a href="#/addNewStudent" class="btn btn-success"><span
		class="glyphicon glyphicon-plus"></span> <b>Add Student</b></a>
		<select ng-model="name" class="btn btn-default">
		<option ng-value="">All Departments</option>
		<option ng-repeat="department in departments">{{department.departmentName}}</option>
		</select>
		<div class="table-responsive" ng-show="departments.length>0" >
	<table class="table table-striped table-bordered">
		<tr class="success">
			<td>ID</td>
			<td>NAME</td>
			<td>FATHER NAME</td>
			<td>GENDER</td>
			<td>YEAR OF STUDY</td>
			<td>DATE OF BIRTHDAY</td>
			<td>ADDRESS</td>
			<td>DEPARTMENTS</td>
			<td>UPDATE</td>
		</tr>
		<tr ng-repeat="student in students | filterDepartment:name | filter:searchText| orderBy:'yearOfStudy'">
			<td>{{student.studentId}}</td>
			<td>{{student.studentName | uppercase}}</td>
			<td>{{student.fatherName | uppercase}}</td>
			<td>{{student.gender}}</td>
			<td>{{student.yearOfStudy}}</td>
			<td><my-date date="{{student.dateOfBirth}}"></my-date></td>
			<td>{{student.address}}</td>
			<td>{{student.department.departmentName | uppercase}}</td>
			<td><a href="#/getStudentById/{{student.studentId}}"
				class="btn btn-danger btn-sm"><span
					class="glyphicon glyphicon-pencil"></span> <b>Edit</b></a>
				<a href="#/removeStudentById/{{student.studentId}}"
					class="btn btn-primary btn-sm">
					<span class="glyphicon glyphicon-remove"></span> <b>Delete</b>
				</a></td>
		</tr>
	</table>
</div>
</div>
</div>