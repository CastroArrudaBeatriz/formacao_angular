export function logarTempoExecucao( showSeconds: boolean = false){

    return function(target: any, method: string, descriptor: PropertyDescriptor){

        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]){

            let unidade = showSeconds ? 's' : 'ms';
            let divisor = showSeconds ? 1000 : 1;

            console.log('-------------------------');
            console.log(` parametros passados para o metodo  ${method}(${JSON.stringify(args)}) `);
            const t1 = performance.now();

            const retorno = metodoOriginal.apply(this, args);
            
            const t2 = performance.now(); 
            
            console.log(`tempo de execucao: ${(t2 - t1) / divisor } ${unidade}`);

            return retorno;
        
        }

        return descriptor;
    }
}