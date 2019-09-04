import { MeuObjeto } from "./MeuObjeto";

export class Negociacao implements MeuObjeto<Negociacao>{
    
    constructor(readonly data: Date , readonly quantidade: number , readonly valor: number){
        
    }

    get volume(){
        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log('-- paraTexto --');
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        );
    }

    equals(objeto: Negociacao): boolean {
        
        return this.data.getDate() == objeto.data.getDate() &&
               this.data.getMonth() == objeto.data.getMonth() &&
               this.data.getFullYear() == objeto.data.getFullYear();
    }
}