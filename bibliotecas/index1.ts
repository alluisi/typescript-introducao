import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log("Chamou a função")
    }
});

$("body").novaFuncao();