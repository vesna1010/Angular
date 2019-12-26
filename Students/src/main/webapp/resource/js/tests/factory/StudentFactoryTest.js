describe('StudentFactory Test', function() {

	var student, service, httpBackend;

	beforeEach(module('app'));

	beforeEach(inject(function(StudentFactory, $httpBackend) {
		service = StudentFactory;
		httpBackend = $httpBackend;
		student = {
			id : 1,
			fullName : 'Student'
		};

	}));

	it('findAllStudents test', function() {
		httpBackend.whenGET('students').respond({
			data : [ student ]
		});

		var promise = service.findAllStudents();

		promise.then(function(response) {
			expect(response.data.length).toEqual(1);
		});

		httpBackend.flush();
	});

	it('findStudentById test', function() {
		httpBackend.whenGET('students/1').respond({
			data : student
		});

		var promise = service.findStudentById(1);

		promise.then(function(response) {
			expect(response.data.fullName).toEqual('Student');
		});

		httpBackend.flush();
	});

	it('saveStudent test', function() {
		httpBackend.whenPOST('students', student).respond({
			data : 'Student has been successfully saved!'
		});

		var promise = service.saveStudent(student);

		promise.then(function(response) {
			expect(response.data).toEqual(
					'Student has been successfully saved!');
		});

		httpBackend.flush();
	});

	it('updateStudent test', function() {
		httpBackend.whenPUT('students/1', student).respond({
			data : 'Student has been successfully updated!'
		});

		var promise = service.updateStudent(student, 1);

		promise.then(function(response) {
			expect(response.data).toEqual(
					'Student has been successfully updated!');
		});

		httpBackend.flush();
	});

	it('deleteStudentById test', function() {
		httpBackend.whenDELETE('students/1').respond({
			data : 'Student has been successfully deleted!'
		});

		var promise = service.deleteStudentById(1);

		promise.then(function(response) {
			expect(response.data).toEqual(
					'Student has been successfully deleted!');
		});

		httpBackend.flush();
	});

});
