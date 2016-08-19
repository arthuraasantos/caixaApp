(function () {
    caixaApp.controller('clienteController', function ($scope, $http, $rootScope, clienteService) {
        $scope.listaDeClientes = clienteService.listarClientes();

        $scope.editarCliente = function (cliente) {
            $scope.contatoParaEditar = cliente;
            $rootScope.exibirModal('visualizarContato');
        }
        
    });
})();