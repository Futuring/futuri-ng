define(['app'], function(app) {

	app.controller('loginController',
    [
        '$scope',
        'AuthService',
        '$state',
        function($scope, AuthService, $state)
        {	
            var auth = new AuthService();
            auth.login();
            $state.go("system.dashboard");
        }
    ]);
});

	


