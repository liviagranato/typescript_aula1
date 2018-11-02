let nomeInput = document.getElementById('nome');
let salarioInput = document.getElementById('salario');
let nomeView = document.getElementById('nomeView');
let salarioView = document.getElementById('salarioView');
let moedaEscolhida = (<HTMLSelectElement>document.getElementById('moedas'));
let sal : number;
let reajuste = document.getElementById('reajuste');
let reajuste_tipo = (<HTMLSelectElement>document.getElementById('reaj'));
let reajuste_text = document.getElementById('reajuste_texto');
let calculo : number = 1;

nomeInput.addEventListener('keyup', (evt)=>{
    console.log(evt);
    let valor: string = (<HTMLInputElement> evt.target).value;
    valor = valor.trim();
    valor = valor.toUpperCase();
    nomeView.innerHTML = valor;
});

salarioInput.addEventListener('keyup', (evt)=>{
    let salario: HTMLInputElement = <HTMLInputElement> evt.target;
    sal  = Number(salario.value);
    let salFormatado: string = sal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    salarioView.innerText = salFormatado;
});

moedaEscolhida.addEventListener('change', (evt) =>{
    var sel = moedaEscolhida.selectedIndex;
    var opt = moedaEscolhida.options[sel];
    var CurValue = opt.value;
    console.log(CurValue);
    if (CurValue == 'real') {
        let salFormatado: string = sal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        salarioView.innerText = salFormatado;
    } else if (CurValue == 'dolar') {
        let salFormatado: string = sal.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        salarioView.innerText = salFormatado;
    } else if (CurValue == 'euro') {
        let salFormatado: string = sal.toLocaleString('en-US', {
            style: 'currency',
            currency: 'EUR'
        });
        salarioView.innerText = salFormatado;
    }

});
reajuste.addEventListener("keyup", (evt) =>{
    let reaj: HTMLInputElement = <HTMLInputElement> evt.target;
    let porcentagem: number  = Number(reaj.value);
    let salario = <HTMLInputElement> document.getElementById('salario');
    let salario_Atual : number = Number(salario.value);
    console.log(salario_Atual);
    if (calculo == 1){
        reajuste_text.innerText = salario_Atual * (1+(porcentagem/100))+'';
    } else {
        reajuste_text.innerText = salario_Atual - salario_Atual * ((porcentagem/100)) +'';
    }

});

reajuste_tipo.addEventListener('change', (evt) =>{
    var sel = reajuste_tipo.selectedIndex;
    var opt = reajuste_tipo.options[sel];
    var CurValue = opt.value;
    let reaj = <HTMLInputElement> document.getElementById('reajuste');
    console.log(CurValue);
    if (CurValue == 'aumento') {
        calculo = 1;
        reaj.value= '';
        reajuste_text.innerText = '';
    } else if (CurValue == 'decremento') {
        calculo = 0;
        reaj.value ='';
        reajuste_text.innerText='';
    }
});