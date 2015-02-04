define([
	'angular'
],
function(angular) {
	return {
		name: "venda",
		defaultRoutePath: "/venda",
		icon: "home",
		routes: {
			"/cliente" : {
				name: "cliente",
				menu: false,
				templateUrl: "cliente.html"
			},
			'/produtos' : {
				name: "produtos",
				menu: false,
				templateUrl: "produtos.html"
			}
		}
	};
});