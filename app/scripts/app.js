define([
	'config/loader.config', 
	'vendor/services/resolveRoute', 
	'angular'
], 
function(config, resolveRoute, angular){

	var app = angular.module('app',['restangular', 'ui.bootstrap', 'ui.router', 'vendor.consts', 'vendor.directives', 'vendor.services']);
	var templatePath = 'template/layout.html';
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
	        
        	for(var key in config.modules) {
    			modules[key] = config.modules[key];
        	}

        	resolveRoute($stateProvider, templatePath, modules);
			$urlRouterProvider.otherwise('/');
		}
	]);

	app.run(['$rootScope', function($rootScope) {
		$rootScope.modules = modules;
	}]);
	
	return app;
});	