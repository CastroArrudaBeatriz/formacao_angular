export function logarTempoExecucao(){

    return function(target: any, method: string, descriptor: PropertyDescriptor){

        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]){

            console.log('-------------------------');
            console.log(` parametros passados para o metodo  ${method}(${JSON.stringify(args)}) `);
            const t1 = performance.now();

            const retorno = metodoOriginal.apply(this, args);
            
            const t2 = performance.now(); 
            console.log(`o retorno do metodo ${method} é ${JSON.stringify(retorno)}`);
            
            console.log(`tempo de execucao: ${t2 - t1}`);

            return retorno;
        
        }

        return descriptor;
    }
}