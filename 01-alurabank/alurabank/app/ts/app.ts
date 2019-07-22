import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

//utilizando JQuery para chamar metodo de adicionar no submit do formulario 
$('.form').submit(controller.adiciona.bind(controller));
$('#botao-importar').click(controller.importaDados.bind(controller));