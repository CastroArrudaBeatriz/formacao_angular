System.register(["../models/index", "../views/index", "../helpers/decorators/index", "../helpers/index", "../services/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, index_5, NegociacaoController, DiaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this.negociacoes = new index_1.Negociacoes();
                    this.negociacoesView = new index_2.NegociacoesView('#negociacoes', true);
                    this.mensagemView = new index_2.MensagemView('#mensagemView');
                    this._negociacaoService = new index_5.NegociacaoService;
                    this.negociacoesView.update(this.negociacoes);
                }
                adiciona() {
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this.verificaDiaUtil(data.getDay())) {
                        return;
                    }
                    const negociacao = new index_1.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this.negociacoes.adiciona(negociacao);
                    index_4.imprime(negociacao, this.negociacoes);
                    this.negociacoesView.update(this.negociacoes);
                    this.mensagemView.update('Negociação adicionada com sucesso!');
                }
                verificaDiaUtil(dia) {
                    if (dia == DiaSemana.Domingo || dia == DiaSemana.Sabado) {
                        this.mensagemView.update('Só podem ser realizadas negocições em dias uteis');
                        return false;
                    }
                    return true;
                }
                importaDados() {
                    const isOk = (res) => {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    };
                    this._negociacaoService.obterNegociacoes(isOk).then((negociacoes) => negociacoes.forEach(negociacao => {
                        this.negociacoes.adiciona(negociacao);
                        this.negociacoesView.update(this.negociacoes);
                    }));
                }
            };
            __decorate([
                index_3.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_3.throttle()
            ], NegociacaoController.prototype, "adiciona", null);
            __decorate([
                index_3.throttle()
            ], NegociacaoController.prototype, "importaDados", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaSemana) {
                DiaSemana[DiaSemana["Domingo"] = 0] = "Domingo";
                DiaSemana[DiaSemana["Segunda"] = 1] = "Segunda";
                DiaSemana[DiaSemana["Terca"] = 2] = "Terca";
                DiaSemana[DiaSemana["Quarta"] = 3] = "Quarta";
                DiaSemana[DiaSemana["Quinta"] = 4] = "Quinta";
                DiaSemana[DiaSemana["Sexta"] = 5] = "Sexta";
                DiaSemana[DiaSemana["Sabado"] = 6] = "Sabado";
            })(DiaSemana || (DiaSemana = {}));
        }
    };
});
