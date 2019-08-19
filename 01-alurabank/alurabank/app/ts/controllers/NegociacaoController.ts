import { Negociacao,Negociacoes, NegociacaoParcial } from '../models/index';
import { NegociacoesView,MensagemView } from '../views/index';
import { domInject, throttle } from '../helpers/decorators/index'
import { NegociacaoService, HandlerFunction } from '../services/index';

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoes', true);
    private mensagemView = new MensagemView('#mensagemView');

    private _negociacaoService = new NegociacaoService;

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }
    
    @throttle()
    adiciona(){
        
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

    @throttle()
    importaDados(){

        const isOk: HandlerFunction = ( res: Response) => {
            if(res.ok){
                return res;
            }else{
                throw new Error(res.statusText)
                
            }
        }


        this._negociacaoService.obterNegociacoes(isOk).then(
            (negociacoes: Negociacao[]) => negociacoes.forEach(negociacao => {
              
                this.negociacoes.adiciona(negociacao);
                this.negociacoesView.update(this.negociacoes);

            })
        );


        
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