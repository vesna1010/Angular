<div class="row">
<div class="col-sm-10  col-sm-offset-1">
<br><br>
	<a href="#/addNewDepartment" class="btn btn-success"><span
		class="glyphicon glyphicon-plus"></span> <b>Add Department</b></a> 
		<div class="table-responsive" ng-show="departments.length>0">
	<table  class="table table-striped table-bordered">
		<tr class="success">
			<td>ID</td>
			<td>DEPARTMENT</td>
			<td>UPDATE</td>
		</tr>
		<tr ng-repeat="department in departments">
			<td>{{department.id}}</td>
			<td>{{department.departmentName}}</td>
			<td><a href="#/getDepartmentById/{{department.id}}"
				class="btn btn-danger btn-sm"><span
					class="glyphicon glyphicon-pencil"></span> <b>Edit</b></a>
				<a href="#/removeDepartmentById/{{department.id}}"
					class="btn btn-primary btn-sm">
					<span class="glyphicon glyphicon-remove"></span> <b>Delete</b>
				</a></td>
		</tr>
	</table>
	</div>
</div>
</div>
