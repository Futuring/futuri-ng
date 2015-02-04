define([
],
function() {
	return {
		name: "fazenda",
		defaultRoutePath: "/fazenda",
		icon: "plus",
		routes: {
			"/" : {
				name: "fazenda",
				menu: true,
				deps: "controllers",
				templateUrl: 'index.html'
			}
		}
	};
});