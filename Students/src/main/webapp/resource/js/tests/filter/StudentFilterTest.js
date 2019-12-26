describe('filterDepartment test', function() {

	var filter, students;

	beforeEach(module('app'));

	beforeEach(inject(function($filter) {
		filter = $filter('filterDepartment');

		students = [ {
			id : 1,
			fullName : 'Student A',
			department : {
				id : 1
			}
		}, {
			id : 2,
			fullName : 'Student B',
			department : {
				id : 2
			}
		}, {
			id : 3,
			fullName : 'Student C',
			department : {
				id : 1
			}
		} ];

	}));

	it('init test', function() {
		expect(filter).toBeDefined();
	});

	it('all students', function() {
		var result = filter(students, 0);

		expect(result.length).toEqual(3);
	});

	it('filtered students', function() {
		var result = filter(students, 1);

		expect(result.length).toEqual(2);
		expect(result[0].fullName).toEqual('Student A');
		expect(result[1].fullName).toEqual('Student C');
	});

});
