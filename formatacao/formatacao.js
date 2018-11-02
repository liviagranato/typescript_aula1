var nomeInput = document.getElementById('nome');
var salarioInput = document.getElementById('salario');
var nomeView = document.getElementById('nomeView');
var salarioView = document.getElementById('salarioView');
var moedaEscolhida = document.getElementById('moedas');
var sal;
var reajuste = document.getElementById('reajuste');
var reajuste_tipo = document.getElementById('reaj');
var reajuste_text = document.getElementById('reajuste_texto');
var calculo = 1;
nomeInput.addEventListener('keyup', function (evt) {
    console.log(evt);
    var valor = evt.target.value;
    valor = valor.trim();
    valor = valor.toUpperCase();
    nomeView.innerHTML = valor;
});
salarioInput.addEventListener('keyup', function (evt) {
    var salario = evt.target;
    sal = Number(salario.value);
    var salFormatado = sal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    salarioView.innerText = salFormatado;
});
moedaEscolhida.addEventListener('change', function (evt) {
    var sel = moedaEscolhida.selectedIndex;
    var opt = moedaEscolhida.options[sel];
    var CurValue = opt.value;
    console.log(CurValue);
    if (CurValue == 'real') {
        var salFormatado = sal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        salarioView.innerText = salFormatado;
    }
    else if (CurValue == 'dolar') {
        var salFormatado = sal.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        salarioView.innerText = salFormatado;
    }
    else if (CurValue == 'euro') {
        var salFormatado = sal.toLocaleString('en-US', {
            style: 'currency',
            currency: 'EUR'
        });
        salarioView.innerText = salFormatado;
    }
});
reajuste.addEventListener("keyup", function (evt) {
    var reaj = evt.target;
    var porcentagem = Number(reaj.value);
    var salario = document.getElementById('salario');
    var salario_Atual = Number(salario.value);
    console.log(salario_Atual);
    if (calculo == 1) {
        reajuste_text.innerText = salario_Atual * (1 + (porcentagem / 100)) + '';
    }
    else {
        reajuste_text.innerText = salario_Atual - salario_Atual * ((porcentagem / 100)) + '';
    }
});
reajuste_tipo.addEventListener('change', function (evt) {
    var sel = reajuste_tipo.selectedIndex;
    var opt = reajuste_tipo.options[sel];
    var CurValue = opt.value;
    var reaj = document.getElementById('reajuste');
    console.log(CurValue);
    if (CurValue == 'aumento') {
        calculo = 1;
        reaj.value = '';
        reajuste_text.innerText = '';
    }
    else if (CurValue == 'decremento') {
        calculo = 0;
        reaj.value = '';
        reajuste_text.innerText = '';
    }
});
