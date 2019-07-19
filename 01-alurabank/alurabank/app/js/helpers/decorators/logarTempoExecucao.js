System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoExecucao(showSeconds = false) {
        return function (target, method, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = showSeconds ? 's' : 'ms';
                let divisor = showSeconds ? 1000 : 1;
                console.log('-------------------------');
                console.log(` parametros passados para o metodo  ${method}(${JSON.stringify(args)}) `);
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`o retorno do metodo ${method} é ${JSON.stringify(retorno)}`);
                console.log(`tempo de execucao: ${(t2 - t1) / divisor} ${unidade}`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoExecucao", logarTempoExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
