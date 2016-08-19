    angular.module("caixaApp").factory("mensagemService", function () {

        var _exibirInformacao = function (mensagem, tempoExibindo) {
            _exibirMensagem(mensagem,'info',tempoExibindo);
        };

        var _exibirErro = function (mensagem, tempoExibindo) {
            _exibirMensagem(mensagem, 'error',tempoExibindo);
        };

        var _exibirSucesso = function (mensagem, tempoExibindo) {
            _exibirMensagem(mensagem, 'success',tempoExibindo);
        };


        var _exibirMensagem = function (mensagem, tipo, tempoExibindo) {
            if (mensagem !== null) {

                if (tipo === null) tipo = 'info';
                if (tempoExibindo == null) tempoExibindo = 10;

                Messenger.options = {
                    extraClasses: 'messenger-fixed messenger-on-top messenger-on-center',
                    theme: 'air'
                };

                Messenger().post({
                    message: mensagem,
                    type: tipo,
                    showCloseButton: true,
                    hideAfter: tempoExibindo
                });
            }
        };

        return {
            exibirInformacao: _exibirInformacao,
            exibirErro: _exibirErro,
            exibirSucesso: _exibirSucesso
        };
    });
