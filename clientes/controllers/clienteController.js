(function () {
    caixaApp.controller('clienteController', function ($scope, $http, $rootScope, clienteService) {
        
        // Variáveis do controller
        
        $scope.novoCliente = [];
        $scope.listaDeClientes = [];


        // Funções do controller        
        $scope.listarClientes = function(){
            $scope.listaDeClientes = clienteService.listarClientes();
        };
        
        $scope.editarCliente = function (cliente) {
            $scope.contatoParaEditar = cliente;
            $rootScope.exibirModal('visualizarContato');
        };

        $scope.criarCliente = function(){
            // chamar serviço de criação de clientes
            // clienteService.criarCliente($scope.novoCliente);
            var clienteObjeto = $scope.toObject($scope.novoCliente);
            $scope.listaDeClientes.push(clienteObjeto);
            $rootScope.exibirSucesso("Contato criado");

        
        };

        $scope.toObject = function (arr) {
            var rv = {};
            for (var i = 0; i < arr.length; ++i)
                rv[i] = arr[i];
            return rv;
        };

        $scope.listarClientes();
        
    });
})();