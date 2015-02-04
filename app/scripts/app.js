define([
	'apps/fazenda/route', 
	'apps/venda/route',
	'vendor/services/resolveRoute', 
	'angular', 
	'angularUiRoute',
	'lodash',
	'Restangular',
	'angularBootstrap',
	'vendor/directive/crud-directive',
	'vendor/directive/login',
	'vendor/constant/consts',
	'vendor/services/authServices',
], 
function(routeFazenda, routeVenda, resolveRoute){

	var app = angular.module('app',['restangular', 'ui.bootstrap', 'ui.router', 'vendor.consts', 'vendor.directives', 'vendor.services']);
	var templatePath = '/admin/template';
	var modules = [];

	app.config(
	[	
		'$stateProvider',
	    '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        '$urlRouterProvider',
		function($stateProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $urlRouterProvider) {

			app.controller = $controllerProvider.register;
	        app.directive  = $compileProvider.directive;
	        app.filter     = $filterProvider.register;
	        app.factory    = $provide.factory;
	        app.service    = $provide.service;

	        //$locationProvider.html5Mode(true);

	        modules['fazenda'] = routeFazenda;
	        modules['venda']   = routeVenda;
	        

	       	$urlRouterProvider.otherwise('/');

        	resolveRoute($stateProvider, templatePath, modules);
		}
	]);

	app.run(['$rootScope', function($rootScope) {
		$rootScope.modules = modules;
	}]);
	
	return app;
});	