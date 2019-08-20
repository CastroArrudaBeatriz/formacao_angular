import { Negociacao } from './Negociacao';
import { Imprimivel } from './imprimivel';
 
export class Negociacoes extends Imprimivel{
    
    private _negociacoes: Array<Negociacao> = [];
    
    adiciona(negociacao: Negociacao): void{

        this._negociacoes.push(negociacao);
    
    }

    get getNegociacoes(): Array<Negociacao> {
      return ([] as Array<Negociacao>).concat(this._negociacoes);  
    }

    paraTexto(): void {

      console.log('-- paraTexto --');
      console.log(JSON.stringify(this._negociacoes));
  }
}