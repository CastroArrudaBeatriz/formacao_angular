import { Negociacoes } from '../models/Negociacoes';
export abstract class View<T> {
        
        private _elemento: JQuery;
    
        constructor(selector: string){
            this._elemento =  $(selector);
          
        }
    
        update(modelo: T): void{
    
            this._elemento.html(this.template(modelo));
            
            if(!(modelo instanceof Negociacoes)){
                setTimeout(() => {
                    this._elemento.innerHTML = '';
                }, 1500);
            }
           
    
        }
      
       abstract template(modelo: T): string;
}

