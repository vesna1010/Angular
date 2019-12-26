describe(
		'RouteConfig Test',
		function() {

			var rootScope, location, route, templateCache, departmentService, studentService, department, student;

			beforeEach(module('app'));

			beforeEach(inject(function($rootScope, $location, $route,
					$templateCache, DepartmentFactory, StudentFactory) {
				rootScope = $rootScope;
				location = $location;
				route = $route;
				departmentService = DepartmentFactory;
				studentService = StudentFactory;
				templateCache = $templateCache;

				department = {
					id : 1,
					title : 'Title'
				};

				student = {
					id : 1,
					fullName : 'Student'
				};
			}));

			it('home page', function() {
				location.path('/');

				rootScope.$apply();

				expect(route.current.controller).toEqual('HomeController');
				expect(route.current.template).toEqual(
						'<h1 class="text-center">HOME PAGE</h1>');

			});

			it('departments page', function() {
				spyOn(departmentService, 'findAllDepartments').and
						.returnValue([ department ]);
				templateCache.put('resources/templates/departments.html', '');

				location.path('/departments');

				rootScope.$apply();

				expect(route.current.controller).toEqual(
						'DepartmentsPageController');
				expect(route.current.templateUrl).toEqual(
						'resources/templates/departments.html');
				expect(route.current.resolve.departments.length).toEqual(1);
			});

			it('department form', function() {
				spyOn(departmentService, 'findDepartmentById').and
						.callFake(function(id) {
							return department;
						});

				templateCache
						.put('resources/templates/departmentForm.html', '');

				location.path('/departments/form/1');

				rootScope.$apply();

				expect(route.current.controller).toEqual(
						'DepartmentsFormController');
				expect(route.current.templateUrl).toEqual(
						'resources/templates/departmentForm.html');
				expect(
						route.current.resolve.department(departmentService,
								route).title).toEqual('Title');
			});

			it('students page', function() {
				spyOn(departmentService, 'findAllDepartments').and
						.returnValue([ department ]);
				spyOn(studentService, 'findAllStudents').and
						.returnValue([ student ]);

				templateCache.put('resources/templates/students.html', '');

				location.path('/students');

				rootScope.$apply();

				expect(route.current.controller).toEqual(
						'StudentsPageController');
				expect(route.current.templateUrl).toEqual(
						'resources/templates/students.html');
				expect(route.current.resolve.departments.length).toEqual(1);
				expect(route.current.resolve.students.length).toEqual(1);
			});

			it('student form',
					function() {
						spyOn(departmentService, 'findAllDepartments').and
								.returnValue([ department ]);
						spyOn(studentService, 'findStudentById').and
								.callFake(function() {
									return student;
								});

						templateCache.put(
								'resources/templates/studentForm.html', '');

						location.path('/students/form/1');

						rootScope.$apply();

						expect(route.current.controller).toEqual(
								'StudentsFormController');
						expect(route.current.templateUrl).toEqual(
								'resources/templates/studentForm.html');
						expect(route.current.resolve.departments.length)
								.toEqual(1);
						expect(
								route.current.resolve.student(studentService,
										route).fullName).toEqual('Student');
					});

			it('otherpage', function() {
				location.path('/something');

				rootScope.$apply();

				expect(route.current.controller).toEqual('HomeController');
				expect(route.current.template).toEqual(
						'<h1 class="text-center">HOME PAGE</h1>');

			});

		});
