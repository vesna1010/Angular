myApp.filter("filterCourse", function(){
	return function(items, name){
		var newItems=[];
		if(name=="All Courses"){
			return items;
		}
		angular.forEach(items, function(item){
			if(item.course.courseName==name){
				newItems.push(item);
			}
		});
		return newItems;
	}
});

