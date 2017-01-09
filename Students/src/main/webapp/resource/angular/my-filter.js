myApp.filter("filterDepartment", function(){
	return function(items, name){
		var newItems=[];
		if(name=="All Departments"){
			return items;
		}
		angular.forEach(items, function(item){
			if(item.department.departmentName==name){
				newItems.push(item);
			}
		});
		return newItems;
	}
});


