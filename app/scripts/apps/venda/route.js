define([
],
function() {
	return {
		defaultRoutePath: "/",
		icon: "home",
		routes: {
			"/cliente" : {
				name: "cliente",
				menu: false,
				templateUrl: "cliente.html"
			}
		}
	};
});