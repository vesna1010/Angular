describe(
		"StudentsPageController Test",
		function() {

			var scope, rootScope, window, students, departments, service, controller;

			beforeEach(module('app'));

			beforeEach(inject(function($rootScope, $controller, $window,
					StudentFactory) {
				scope = $rootScope.$new();
				rootScope = $rootScope;
				window = $window;
				service = StudentFactory;

				departments = [ {
					id : 1,
					title : 'Title A'
				}, {
					id : 2,
					title : 'Title B'
				} ];

				students = [ {
					id : 1,
					fullName : 'Student A'
				}, {
					id : 2,
					fullName : 'Student B'
				} ];

				controller = $controller('StudentsPageController', {
					$scope : scope,
					$rootScope : rootScope,
					$window : window,
					departments : departments,
					students : students,
					StudentFactory : service
				})
			}));

			it('init test', function() {
				expect(rootScope.activeTab).toEqual('students');
				expect(scope.departments.length).toEqual(2);
				expect(scope.students.length).toEqual(2);
			});

			it('deleteStudentById test', function() {
				spyOn(service, 'deleteStudentById').and.callFake(function(id) {
					return {
						then : function() {
						}
					}
				});

				scope.deleteStudentById(1);

				expect(service.deleteStudentById).toHaveBeenCalledWith(1);
			});

			it('findStudentById test', function() {
				scope.findStudentById(1);

				expect(window.location.href).toContain('#/students/form/1');
			});

		});
