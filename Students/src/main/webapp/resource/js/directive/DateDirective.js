var app = angular.module('app');

app.directive("myDate", function() {
	return {
		template : '{{date | date:"dd.MM.yyyy"}}',
		restrict : 'E',
		scope : {
			date : '@'
		},
		link : function(scope) {
			scope.date = new Date();
		}
	}
});



