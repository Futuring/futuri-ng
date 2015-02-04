window.name = 'NG_DEFER_BOOTSTRAP!';

require.config({
	paths: {
		angular: '../../bower_components/angular/angular',
		Restangular : '../../bower_components/restangular/dist/restangular',
		angularBootstrap: '../../bower_components/angular-bootstrap/ui-bootstrap',
		lodash: '../../bower_components/lodash/dist/lodash',
		angularUiRoute: '../../bower_components/angular-ui-router/release/angular-ui-router',
	},
	deps: [],
    name: 'loader/config',
	shim: {
		'angular': {
			'exports': 'angular'
		},
		'lodash': {
			'exports': 'lodash'
		},
		'angularRoute': {
			'exports': 'angularRoute',
			'deps': ['angular']
		},
		/*'angularRoute': {
			'exports': 'angularRoute',
			'deps': ['angular']
		},*/
		'angularUiRoute': {
			'exports': 'angularUiRoute',
			'deps': ['angular']
		},
		'angularBootstrap': {
			'exports': 'angularBootstrap',
			'deps': ['angular']
		},
		'Restangular': {
			'exports': 'Restangular',
			'deps': ['angular', 'lodash']
		}
	}
});

require([
	'app',
	'config/modules',
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
function (app) 
{
   angular.bootstrap(document, ['app']);
});
