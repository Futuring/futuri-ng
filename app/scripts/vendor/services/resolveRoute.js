define(['vendor/services/dependencyResolverFor'], function(dependencyResolverFor)
{   
    
    var routerCollection = [];
    var preffix = "controllers";
    var createSystem = false;
	var modelPreffix = "scripts/";
    
    return function($stateProvider, templatePath, modules)
    {   

       
        $stateProvider.state("system", 
            {   
                abstract: true,
                views: {
                    "app": { 
                        templateUrl: templatePath
                     },
                    "auth": { template: "" }
                }
            }
        );

        for(var key in modules) {
             
            var data = modules[key].routes;
            var rootPath = modules[key].defaultRoutePath === "/" ? "" : modules[key].defaultRoutePath;

            for(var path in data) {
                routerCollection[data[path].name] = path;

                if(data[path].abstract == undefined) {
                    data[path].abstract = false;
                }

                var template = data[path].templateUrl != undefined ? data[path].templateUrl : "index.html";

                var routeName = data[path].name;

                var deps = data[path].deps != undefined ? 
                                    "modules/"+key+"/"+preffix+"/"+routeName+"/"+data[path].deps :
                                    "modules/"+key+"/"+preffix+"/"+routeName+"/"+routeName;

                $stateProvider.state("system."+routeName, {
                    url: rootPath+path,
                    controller: data[path].controller ? data[path].controller : routeName+"Controller", 
                    templateUrl: modelPreffix+"modules/"+key+"/"+preffix+'/'+routeName+'/'+template,
                    resolve: dependencyResolverFor(deps, path), 
                    abstract: data[path].abstract
                });

            }
           
        }
    }
});