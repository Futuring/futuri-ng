define(['angular'], function(angular) {

	angular.module('vendor.directives',[])
	.directive("userInfo", ['Session', function(Session) {
		return {
			restrict: "E",
			templateUrl: '/app/scripts/vendor/views/directive/user.html',
			controller: function($scope) {
				$scope.name = 'Session.userId.nome';
				$scope.image = 'Session.userId.image';
			}
		}	
	}])

	.directive('menuSide', ['$rootScope', function($rootScope) {
		return {
			restrict: 'E',
			templateUrl: '/app/scripts/vendor/views/directive/menu.html',
			controller: function($scope) {
				var modulos = $rootScope.modules;
				$scope.modules = [];

				for(var key in modulos) {
					$scope.modules.push({
						name: key, 
						routes: modulos[key].routes,
						icon: modulos[key].icon
					});
				}
			}
		};
	}]);

});	