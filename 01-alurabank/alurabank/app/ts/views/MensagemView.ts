class MensagemView {
    
    private _elemento: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update(modelo: string){

        this._elemento.innerHTML = this.template(modelo);
        setTimeout(() => {
            this._elemento.innerHTML = '';
        }, 1500);

    }
  
    template(modelo: string): string {
        
        return `<p class="alert alert-info">${modelo}</p>`
    }
}