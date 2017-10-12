<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
<script type="text/javascript"
	src="<c:url value='/resources/js/config/RouteConfig.js'/>"></script>
<script type="text/javascript"
	src="<c:url value='/resources/js/controller/DepartmentController.js'/>"></script>
<script type="text/javascript"
	src="<c:url value='/resources/js/controller/StudentController.js'/>"></script>
<script type="text/javascript"
	src="<c:url value='/resources/js/controller/HomeController.js'/>"></script>
<script type="text/javascript"
	src="<c:url value='/resources/js/directive/DateDirective.js'/>"></script>
<script type="text/javascript"
	src="<c:url value='/resources/js/factory/DepartmentFactory.js'/>"></script>
<script type="text/javascript"
	src="<c:url value='/resources/js/factory/StudentFactory.js'/>"></script>
<script type="text/javascript"
	src="<c:url value='/resources/js/filter/StudentFilter.js'/>"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="<c:url value='/resources/css/style.css'/>">
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
							<li ng-class="{active:activeTab=='home'}"><a href="#/">Home</a></li>
							<li ng-class="{active:activeTab=='departments'}"><a
								href="#/departments">Departments</a></li>
							<li ng-class="{active:activeTab=='students'}"><a
								href="#/students">Students</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<ng-view></ng-view>
	</div>
</body>
</html>
