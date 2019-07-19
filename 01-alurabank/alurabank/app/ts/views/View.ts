import { Negociacoes } from '../models/Negociacoes';
import { logarTempoExecucao } from '../helpers/decorators/index';

export abstract class View<T> {
        
        private _elemento: JQuery;
        private _escape: boolean;
    
        constructor(selector: string , escape: boolean = false){
            this._elemento =  $(selector);
            this._escape = escape;
          
        }
    
        @logarTempoExecucao()
        update(modelo: T): void{
            
            let template = this.template(modelo);
           
            if(this._escape){
                template = template.replace(/<script>[\s\S]*?<\/script>/, '');
            }

            this._elemento.html(template);
            
            if(!(modelo instanceof Negociacoes)){
                setTimeout(() => {
                    this._elemento.html(' ');
                }, 2000);
            }
           
    
        }
      
       abstract template(modelo: T): string;
}

