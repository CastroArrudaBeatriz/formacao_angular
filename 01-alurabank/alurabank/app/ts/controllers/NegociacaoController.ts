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
        
        let data = new Date(this._inputData.val().replace(/-/g, ',')); 

        if(!this.verificaDiaUtil(data.getDay())){
            return;
        }

        const negociacao = new Negociacao( 
            data , 
            parseInt(this._inputQuantidade.val()) , 
            parseFloat(this._inputValor.val()) );
       
        this.negociacoes.adiciona(negociacao);

        this.negociacoesView.update(this.negociacoes);  
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }

    private verificaDiaUtil(dia: number): boolean{
        
        if( dia == DiaSemana.Domingo || dia == DiaSemana.Sabado){
            this.mensagemView.update('Só podem ser realizadas negocições em dias uteis');
            return false;
        }

        return true;
    }
}

enum DiaSemana{
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}