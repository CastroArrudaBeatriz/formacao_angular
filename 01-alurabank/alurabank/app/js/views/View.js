import { Negociacoes } from '../models/Negociacoes';
export class View {
    constructor(selector) {
        this._elemento = $(selector);
    }
    update(modelo) {
        this._elemento.html(this.template(modelo));
        if (!(modelo instanceof Negociacoes)) {
            setTimeout(() => {
                this._elemento.innerHTML = '';
            }, 1500);
        }
    }
}
