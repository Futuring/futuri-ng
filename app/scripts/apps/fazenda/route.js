define([
],
function() {
	return {
		name: "fazenda",
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