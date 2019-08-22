import { Negociacao } from './Negociacao';
import { Imprimivel } from './imprimivel';
import { Igualavel } from './Igualavel';
 
export class Negociacoes implements Imprimivel, Igualavel<Negociacoes>{
    
    private _negociacoes: Array<Negociacao> = [];
    
    adiciona(negociacao: Negociacao): void{

        this._negociacoes.push(negociacao);
    
    }

    getNegociacoes(): Array<Negociacao> {
      return ([] as Array<Negociacao>).concat(this._negociacoes);  
    }

    paraTexto(): void {

      console.log('-- paraTexto --');
      console.log(JSON.stringify(this._negociacoes));
    }

    equals(objeto: Negociacoes): boolean {
      return JSON.stringify(this._negociacoes) == JSON.stringify(objeto.getNegociacoes());
    }


}