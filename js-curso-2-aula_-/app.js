// var titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// var paragrafo = document.querySelector ('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10.';

var listaDeNumerosSorteados = [];
var numeroLimite = 9;
var secretNumber = gerarNumeroAleatorio();
tentativas = 1; // contador do jogo

function exibirTextoNaTela (tag, texto) {           
    var campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial () {
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}.`);
}

mensagemInicial ();

function verificarChute () {
    var chuteDoTrouxa  = document.querySelector ('input').value;

if (chuteDoTrouxa == secretNumber) {
    exibirTextoNaTela('h1', 'Acertou Miseravi!');
    var concordancia = tentativas > 1 ? 'chutes' : 'chute'
    var mensagemTentativas = ` Você descobriu o número com ${tentativas} ${concordancia}!`; 
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById ('reiniciar').removeAttribute('disabled');
} else if (chuteDoTrouxa < secretNumber) {
    exibirTextoNaTela('h1', 'ERRRRRROUU');
    exibirTextoNaTela('p', ' o número é maior!');
} if (chuteDoTrouxa > secretNumber) {
    exibirTextoNaTela('h1', 'ERRRRRROUU');
    exibirTextoNaTela('p', ' o número é menor!')
} tentativas++;
limparCampo();

}

function gerarNumeroAleatorio() {
    var numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    var quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados); 
        return numeroEscolhido;
    }
}

function limparCampo() {
    chuteDoTrouxa = document.querySelector('input');
    chuteDoTrouxa.value = '';
}

function reiniciarJogo() {
    secretNumber = gerarNumeroAleatorio ();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}.` );
    mensagemInicial ();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// a função (document.querySelector) especifica para o Java qual parte do código em HTML queremos modificar.
// a função "titulo.innerHTML" nos permite agora que declaramos o título e especificamos em java onde queremos alterar o código em HTML, mudar o texto no HTML que aparecerá na tela.
// h1 é a "Head" (cabeça) ou título principal no HTML.
// podemos usar uma função que guarde um valor de tag para que possamos sempre alterar nosso código sem que seja necessário ficar escrevendo novos documents.querySelector e .innerHTML.
// essa é a chamada função com parâmetros (que contem entre os parênteses algo). Essa função em especial está sendo usada para substituirmos os códigos acima, afim de simplificar o código     e permitir que não tenhamos que ficr reescrevendo toda hora.
// Booleano = Verdadeiro ou falso.
// é necessario usar o return para que o código armazene o número aleatório na variável, caso contrário, ele não o fará.
// Arrays são como variáveis, que armazenam mais de uma informação. Na verdade são listas, e são especificadas por colchetes []. O primeiro item dentro de uma array tem o índice 0; o seungo, 1 e assim por diante. De forma que para chamar um item específico dentro de uma array é necessário que se chame por sua posição.
// chamar o nome da array e colocar .length no final nos mostrará a quantidade de itens dentro da array.
// adicionar ".push" permite que você insira mais um elemento à lista.
//chamar o nome da array e asicionar ".pop()" removerá o último item da array.
// a função responsiveVpice permite que o texto seja narrado. o Primeiro argumento, indicamos oque queremos que seja narrado, o segundo entre aspas, a linguagem, e o terceiro entre chaves e com a palavra rate "{rate: 1.2}", a velocidade.
