import { Imprimivel } from "../../models/index";

export function imprime(...params: Imprimivel[]) {

    params.forEach( param => param.paraTexto() );
}