<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html data-ng-app="app">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript"
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script type="text/javascript"
	src="https://code.angularjs.org/1.5.8/angular-route.min.js"></script>
<script type="text/javascript"
	src="http://localhost:8080/Students/resources/js/config/RouteConfig.js"></script>
<script type="text/javascript"
	src="http://localhost:8080/Students/resources/js/controller/DepartmentController.js"></script>
<script type="text/javascript"
	src="http://localhost:8080/Students/resources/js/controller/StudentController.js"></script>
<script type="text/javascript"
	src="http://localhost:8080/Students/resources/js/controller/HomeController.js"></script>
<script type="text/javascript"
	src="http://localhost:8080/Students/resources/js/directive/DateDirective.js"></script>
<script type="text/javascript"
	src="http://localhost:8080/Students/resources/js/factory/DepartmentFactory.js"></script>
<script type="text/javascript"
	src="http://localhost:8080/Students/resources/js/factory/StudentFactory.js"></script>
<script type="text/javascript"
	src="http://localhost:8080/Students/resources/js/filter/StudentFilter.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet"
	href="http://localhost:8080/Students/resources/css/style.css">
</head>
<body>
<div class="containter">
		<div class="row">
			<div class="col-sm-12">

				<div class="navbar navbar-fixed-top navbar-inverse">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-target="#navbar"
							data-toggle="collapse">
							<span class="icon-bar"></span> <span class="icon-bar"></span> <span
								class="icon-bar"></span>
						</button>
					</div>
					<div class="collapse navbar-collapse" id="navbar">
						<ul class="nav navbar-nav">
							<li data-ng-class="{active:activeTab === 'home'}"><a
								href="#/">Home</a></li>
							<li data-ng-class="{active:activeTab === 'departments'}"><a
								href="#/departments">Departments</a></li>
							<li data-ng-class="{active:activeTab === 'students'}"><a
								href="#/students">Students</a></li>
						</ul>
					</div>
				</div>

			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<ng-view></ng-view>
			</div>
		</div>

	</div>
</body>
</html>

