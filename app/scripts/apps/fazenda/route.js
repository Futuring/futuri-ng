define([
],
function() {
	return {
		defaultRoutePath: "/",
		icon: "plus",
		routes: {
			"/" : {
				name: "fazenda",
				menu: true,
				deps: "controllers"
			}
		}
	};
});