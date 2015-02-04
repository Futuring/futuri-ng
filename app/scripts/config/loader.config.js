define(imports, function() {
	var modules = {};
	
	for(var i = 1, len = arguments.length; i < len; i++){
		modules[imports[i].split("/")[1]] = arguments[i];
	}

	return {
		'modules': modules
	};
})