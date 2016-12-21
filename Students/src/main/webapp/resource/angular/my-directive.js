myApp.directive("myDate", function(){
	return {
		template:'{{date | date:"dd/MM/yyyy"}}',
		restrict:'EA',
		scope:{
			date:'@'
		},
		link:function($scope){
			$scope.date=new Date();
		}
	}
});