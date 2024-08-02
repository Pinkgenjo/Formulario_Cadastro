$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: 'Por Favor, insira seu nome',
            email: 'Por Favor, insira seu e-mail',
            telefone: 'Por Favor, insira se telefone com o DDD',
            endereco: 'Por Favor, insira seu endereço completo',
            cpf: 'Por Favor, insira seu CPF',
            cep: 'Por Favor, insira seu CEP'
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha todos os campos para prosseguir com a compra!");
        }
    });
});