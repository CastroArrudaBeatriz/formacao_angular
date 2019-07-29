import { Negociacao,Negociacoes, NegociacaoParcial } from '../models/index';
import { NegociacoesView,MensagemView } from '../views/index';
import { domInject, throttle } from '../helpers/decorators/index'

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

        function isOk( res: Response){
            if(res.ok){
                return res;
            }else{
                throw new Error(res.statusText)
                
            }
        }

      
            
            fetch('http://localhost:8080/dados')
            .then( res => isOk(res))
            .then( res => res.json() )
            .then( (dados: NegociacaoParcial[]) => {
                dados.map(dado =>  new Negociacao( new Date(), dado.vezes , dado.montante))
                .forEach( negociacao => this.negociacoes.adiciona(negociacao))
                this.negociacoesView.update(this.negociacoes)
            }
            )
            .catch( err => console.log(err));  


        
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