import { Negociacao,Negociacoes } from '../models/index';
import { NegociacoesView,MensagemView } from '../views/index';


export class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoes', true);
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
 
    adiciona(event: Event){

        event.preventDefault();
        
        const negociacao = new Negociacao( 
            new Date(this._inputData.val().replace(/-/g, ',')) , 
            parseInt(this._inputQuantidade.val()) , 
            parseFloat(this._inputValor.val()) );
        
        console.log(`
            Data: ${negociacao.data}
            Quantidade: ${negociacao.quantidade}
            Valor: ${negociacao.valor}
            Volume: ${negociacao.volume}
        `);  

        this.negociacoes.adiciona(negociacao);

        this.negociacoesView.update(this.negociacoes);  
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}