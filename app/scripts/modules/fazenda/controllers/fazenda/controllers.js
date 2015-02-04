define(['app'], function(app) {

	app.controller('fazendaController',
    [	

        '$scope',
        function($scope)
        {	
        	$scope.pessoas = [
				{
					id: 1,
					nome: "breno",
					idade: 18
				},
				{
					id: 2,
					nome: "bruno",
					idade: 19
				},
				{
					id: 3,
					nome: "Thiago",
					idade: 15
				}, 
                {
                    id: 4,
                    nome: "Pregolino",
                    idade: 12
                }
			]; 

			$scope.columns = [
			{
				name: 'nome', 
			}, 
			{
				name: 'idade' 
			}];
        }
    ]);
    
});

