<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app="app" lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript"
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script type="text/javascript"
	src="https://code.angularjs.org/1.5.8/angular-route.min.js"></script>
<script type="text/javascript" src="angular/my-controller.js"></script>
<script type="text/javascript" src="angular/my-factory.js"></script>
<script type="text/javascript" src="angular/my-filter.js"></script>
<script type="text/javascript" src="angular/my-directive.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="style/my-style.css">
</head>
<body>
	<div class="containter">
		<div class="row">
			<div class="col-sm-12">
				<div class="navbar navbar-fixed-top navbar-inverse">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle"
						data-target="#navbar" data-toggle="collapse">
						<span class="icon-bar"></span> 
						<span class="icon-bar"></span> 
						<span class="icon-bar"></span>
					</button>
				</div>
					<div class="collapse navbar-collapse" id="navbar">
						<ul class="nav navbar-nav">
							<li ng-class="{active:activeTab=='home'}"><a href="#/">Home</a></li>
							<li ng-class="{active:activeTab=='courses'}"><a
								href="#/listCourses">Courses</a></li>
							<li ng-class="{active:activeTab=='students'}"><a
								href="#/listStudents">Students</a></li>
						</ul>
						</div>
				</div>
				</div>
			</div>
		</div>
		<ng-view></ng-view>
	</div>
</body>
</html>