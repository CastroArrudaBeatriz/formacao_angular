System.register(["../models/Negociacoes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacoes_1, View;
    return {
        setters: [
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            }
        ],
        execute: function () {
            View = class View {
                constructor(selector) {
                    this._elemento = $(selector);
                }
                update(modelo) {
                    this._elemento.html(this.template(modelo));
                    if (!(modelo instanceof Negociacoes_1.Negociacoes)) {
                        setTimeout(() => {
                            this._elemento.innerHTML = '';
                        }, 1500);
                    }
                }
            };
            exports_1("View", View);
        }
    };
});
