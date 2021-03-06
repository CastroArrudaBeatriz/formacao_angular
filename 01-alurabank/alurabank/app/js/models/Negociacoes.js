System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacoes;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacoes = [];
                }
                adiciona(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                getNegociacoes() {
                    return [].concat(this._negociacoes);
                }
                paraTexto() {
                    console.log('-- paraTexto --');
                    console.log(JSON.stringify(this._negociacoes));
                }
                equals(objeto) {
                    return JSON.stringify(this._negociacoes) == JSON.stringify(objeto.getNegociacoes());
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
