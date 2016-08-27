angular.module("caixaApp").factory("clienteService", function () {
    var listaDeClientes = [];
    var _listarClientes = function () {
        listaDeClientes = [
        {
            nome: "Maria",
            email: "maria@gmail.com",
            telefone: "21 1234 5678",
            celular: "21 32665982",
            tipoCliente: true,
            tipoFornecedor: false,
            tipoParceiro: true
        },
        {
            nome: "José",
            email: "jose@gmail.com",
            telefone: "21 2256 4887",
            celular: "21 32665548",
            tipoCliente: false,
            tipoFornecedor: false,
            tipoParceiro: true
        },
        {
            nome: "Carmem",
            email: "carmem@gmail.com",
            telefone: "21 3652 4004",
            celular: "21 32465931",
            tipoCliente: true,
            tipoFornecedor: true,
            tipoParceiro: true
        },
        {
            nome: "Pandora Dionesia",
            email: "pandora@gmail.com",
            telefone: "21 6395 2457",
            celular: "21 85675182",
            tipoCliente: false,
            tipoFornecedor: false,
            tipoParceiro: true
        }];
        return listaDeClientes;
    };

    var _criarCliente = function(novoCliente){
        // implementar criação chamando api ;
        
    };

    return {
        listarClientes: _listarClientes,
        criarCliente: _criarCliente
    };
});
