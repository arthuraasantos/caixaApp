var caixaApp = angular.module('caixaApp', 
[
    'angularModalService',
    'ui.router',
    'ngRoute'
])
.run(function ($rootScope, $state, mensagemService, ModalService) {
    $rootScope.exibirInformacao = function (mensagem) {
        mensagemService.exibirInformacao(mensagem, 5);
    };

    $rootScope.exibirSucesso = function (mensagem) {
        mensagemService.exibirSucesso(mensagem, 5);
    };

    $rootScope.exibirErro = function (mensagem) {
        mensagemService.exibirErro(mensagem, 5);
    };

    $rootScope.exibirModal = function (template) {

        if (!template) template = 'template.html';
        ModalService.showModal({
            templateUrl: template,
            controller: "clienteController"
        }).then(function (modal) {
            modal.element.modal();
            modal.close.then(function (result) {
                exibirInformacao("Voce escolheu" + result);
            });
        });
    };
});

caixaApp.config(['$routeProvider','$locationProvider', function(routeProvider, locationProvider){

    locationProvider.html5Mode(true);

    routeProvider.when('/', {
        templateUrl: 'dashboard/dashboardTemplate.html',
        controller: 'caixaAppController'
    });

    routeProvider.when('/clientes', {
        templateUrl: 'clientes/templates/clientesTemplate.html',
        controller: 'clienteController'
    }).otherwise({ redirectTo: "/" });

   



}]);

caixaApp.controller('caixaAppController', function ($scope, $http, $rootScope, mensagemService, ModalService) {
    $scope.usuarioLogado = {
        nome: "Mickey Mouse",
        email: "mickey@disney.com.br",
        telefone: "21 98653265"
    };

  
});


