define([
],
function() {
	return {
		name: "fazenda",
		defaultRoutePath: "/fazenda",
		icon: "plus",
		routes: {
			"/index" : {
				name: "fazenda",
				menu: true,
				deps: "controllers"
			}
		}
	};
});