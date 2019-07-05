class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoes');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        
        this._inputData = <HTMLInputElement> document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement> document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
 
    adiciona(event: Event){

        event.preventDefault();
        
        const negociacao = new Negociacao( 
            new Date(this._inputData.value.replace(/-/g, ',')) , 
            parseInt(this._inputQuantidade.value) , 
            parseFloat(this._inputValor.value) );
        
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);  
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}