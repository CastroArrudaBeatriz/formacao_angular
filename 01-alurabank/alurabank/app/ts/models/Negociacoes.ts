import { Negociacao } from './Negociacao';
export class Negociacoes {
    
    private _negociacoes: Array<Negociacao> = [];
    
    adiciona(negociacao: Negociacao): void{

        this._negociacoes.push(negociacao);
    
    }

    get getNegociacoes(): Array<Negociacao> {
      return ([] as Array<Negociacao>).concat(this._negociacoes);  
    }
}