class View {
    constructor(selector) {
        this._elemento = document.querySelector(selector);
    }
    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
        if (!(modelo instanceof Negociacoes)) {
            setTimeout(() => {
                this._elemento.innerHTML = '';
            }, 1500);
        }
    }
}
