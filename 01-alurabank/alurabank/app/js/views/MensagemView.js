class MensagemView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
        setTimeout(() => {
            this._elemento.innerHTML = '';
        }, 1500);
    }
    template(modelo) {
        return `<p class="alert alert-info">${modelo}</p>`;
    }
}
