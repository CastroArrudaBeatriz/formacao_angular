abstract class View<T> {
    
    private _elemento: Element;

    constructor(selector: string){
        this._elemento =  document.querySelector(selector);
    }

    update(modelo: T): void{

        this._elemento.innerHTML = this.template(modelo);
        
        if(!(modelo instanceof Negociacoes)){
            setTimeout(() => {
                this._elemento.innerHTML = '';
            }, 1500);
        }
       

    }
  
   abstract template(modelo: T): string;
}
