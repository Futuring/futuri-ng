define(['angular'], function(angular) {

	angular.module("vendor.services", [])
	.service("Session", function () {
		this.create = function(sessionId, userId, userRole) {
			this.sessionId = sessionId;
			this.userId    = userId;
		};

		this.destroy = function() {
			this.sessionId = null;
			this.userId    = null;
		};

		return this;
	})
	.factory("AuthService", function (Session) {
		
		var AuthService = function(url) {
			
			var self = this;
			
			this.url = url;

			this.login = function(credentials) {
				 /* return $http
			      .post(url, credentials)
			      .then(function (res) {
			        Session.create(res.data.id, res.data.user.id);
			        return res.data.user;
			      });
				*/

				var user = {nome: "Breno Douglas", endereco: "Av. Anhaguera", image: "image/avata.jpg"};
				Session.create(2121, user, "*");
				
				return user;
			};

			this.isAuthenticated = function () {
			    return !!Session.sessionId;
		  	};

		  	/**
		  	 * @todo Implementar permissões dentro da arquitetura 
		  	 * this.isAuthorized = function (authorizedRoles) {
			    
			    if (!angular.isArray(authorizedRoles)) {
			      authorizedRoles = [authorizedRoles];
			    }

			    return (authService.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
		  	}; */


		};

		return AuthService;

	});
});