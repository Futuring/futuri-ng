define([
],
function() {
	return {
		defaultRoutePath: "/venda",
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