export function throttle( milisegundos: number = 500){

    return function(target: any, method: string, descriptor: PropertyDescriptor){

        const metodoOriginal = descriptor.value;

        let timer = 0;    
       
        descriptor.value = function(...args: any[]){

            if(event){
                event.preventDefault();
            }
            
            clearInterval(timer);
          
            timer = setTimeout(() => metodoOriginal.apply(this, args), milisegundos);
        
        }

        return descriptor;
    }
}

