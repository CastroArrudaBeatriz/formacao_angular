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
                constructor(selector, escape = false) {
                    this._elemento = $(selector);
                    this._escape = escape;
                }
                update(modelo) {
                    let template = this.template(modelo);
                    if (this._escape) {
                        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
                    }
                    this._elemento.html(template);
                    if (!(modelo instanceof Negociacoes_1.Negociacoes)) {
                        setTimeout(() => {
                            this._elemento.html(' ');
                        }, 1000);
                    }
                }
            };
            exports_1("View", View);
        }
    };
});
