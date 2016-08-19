angular.module("caixaApp").factory("clienteService", function () {

    var _listarClientes = function () {
        var listaDeClientes = [
        {
            nome: "Maria",
            email: "maria@gmail.com",
            telefone: "21 1234 5678",
            tipoCliente: true,
            tipoFornecedor: false,
            tipoParceiro: true
        },
        {
            nome: "José",
            email: "jose@gmail.com",
            telefone: "21 2256 4887",
            tipoCliente: false,
            tipoFornecedor: false,
            tipoParceiro: true
        },
        {
            nome: "Carmem",
            email: "carmem@gmail.com",
            telefone: "21 3652 4004",
            tipoCliente: true,
            tipoFornecedor: true,
            tipoParceiro: true
        },
        {
            nome: "Pandora Dionesia",
            email: "pandora@gmail.com",
            telefone: "21 6395 2457",
            tipoCliente: false,
            tipoFornecedor: false,
            tipoParceiro: true
        }];
        return listaDeClientes;
    };

    return {
        listarClientes: _listarClientes
    };
});
