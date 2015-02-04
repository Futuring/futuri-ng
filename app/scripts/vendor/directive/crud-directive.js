define(['angular'], function(angular) {

	angular.module('vendor.directives', [])
	.directive("tableGrid", function() {
		return { 
			restrict: "E",
			templateUrl: 'admin/js/vendor/views/directive/table-grid.html',
			scope: {
				model: '=ngModel',
				tableName: '@',
				searchBar: '@',
				columns: '='
			},
			link: function(scope) {
				if(! scope.searchBar ) {
					scope.searchBar = false;
				}
			}
		}
	});

});