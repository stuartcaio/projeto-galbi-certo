const botaoGabarito = document.getElementsByClassName('botao-gabarito');
const input = document.getElementsByClassName('input-aluno');
const formulario = document.getElementById('formulario-aluno');
const nota = document.getElementById('valor-nota');
const botaoCorrecao = document.getElementById('botao-correcao');

const formGabarito = document.getElementsByClassName('form')[0];
const botaoEnvioGabarito = document.getElementsByClassName('form__botao')[0];
const inputGabarito = document.getElementsByClassName('form___input');

const secao = document.getElementsByClassName('secao');

let enviado = false;
let notaTotal = 0;

const questoes = [];
const respostas = [];

function enviarGabarito(){
    for(i = 0; i < 10; i++){
        const gabarito = prompt(`Informe a questão ${i}`);
        questoes.push(gabarito);

        botaoGabarito[i].innerHTML = questoes[i];
    }
}

function zerar(){
    notaTotal = 0;

    nota.innerHTML = notaTotal;
    
    for(i = 0; i < 10; i++){
        input[i].value = null;
    }

    respostas = [];
}

function aoEnviar(){
    for(i = 0; i < 10; i++){
        const resposta = input[i].value;
        respostas.push(resposta);
    }

    for(i = 0; i < 10; i++){
        if(respostas[i] == questoes[i]){
            notaTotal++;

            nota.innerHTML = notaTotal;
        }
    }
}