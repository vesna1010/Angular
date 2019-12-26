describe(
		'StudentsFormController Test',
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

				student = {
					id : 1,
					fullName : 'Student'
				};

				controller = $controller('StudentsFormController', {
					$scope : scope,
					$rootScope : rootScope,
					$window : window,
					departments : departments,
					student : student,
					StudentFactory : service
				})
			}));

			it('init test', function() {
				expect(rootScope.activeTab).toEqual('students');
				expect(scope.departments.length).toEqual(2);
				expect(scope.student.fullName).toEqual('Student');
			});

			it('saveStudent test', function() {
				spyOn(service, 'saveStudent').and.callFake(function(student) {
					return {
						then : function() {
						}
					}
				});

				scope.saveStudent(student);

				expect(service.saveStudent).toHaveBeenCalledWith(student);
			});

			it('updateStudent test', function() {
				spyOn(service, 'updateStudent').and.callFake(function(student,
						id) {
					return {
						then : function() {
						}
					}
				});

				scope.updateStudent(student, 1);

				expect(service.updateStudent).toHaveBeenCalledWith(student, 1);
			});
		});
