describe('DepartmentFactory Test', function() {

	var department, service, httpBackend;

	beforeEach(module('app'));

	beforeEach(inject(function(DepartmentFactory, $httpBackend) {
		service = DepartmentFactory;
		httpBackend = $httpBackend;
		department = {
			id : 1,
			title : 'Title'
		};

	}));

	it('findAllDepartments test', function() {
		httpBackend.whenGET('departments').respond({
			data : [ department ]
		});

		var promise = service.findAllDepartments();

		promise.then(function(response) {
			expect(response.data.length).toEqual(1);
		});

		httpBackend.flush();
	});

	it('findDepartmentById test', function() {
		httpBackend.whenGET('departments/1').respond({
			data : department
		});

		var promise = service.findDepartmentById(1);

		promise.then(function(response) {
			expect(response.data.title).toEqual('Title');
		});

		httpBackend.flush();

	});

	it('saveDepartment test', function() {
		httpBackend.whenPOST('departments', department).respond({
			data : 'Department has been successfully saved!'
		});

		var promise = service.saveDepartment(department);

		promise.then(function(response) {
			expect(response.data).toEqual(
					'Department has been successfully saved!');
		});

		httpBackend.flush();
	});

	it('updateDepartment test', function() {
		httpBackend.whenPUT('departments/1', department).respond({
			data : 'Department has been successfully updated!'
		});

		var promise = service.updateDepartment(department, 1);

		promise.then(function(response) {
			expect(response.data).toEqual(
					'Department has been successfully updated!');
		});

		httpBackend.flush();
	});

	it('deleteDepartmentById test', function() {
		httpBackend.whenDELETE('departments/1').respond({
			data : 'Department has been successfully deleted!'
		});

		var promise = service.deleteDepartmentById(1);

		promise.then(function(response) {
			expect(response.data).toEqual(
					'Department has been successfully deleted!');
		});

		httpBackend.flush();
	});

});
