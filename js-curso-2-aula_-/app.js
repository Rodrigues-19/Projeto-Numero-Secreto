// var titulo = document.querySelector('h1'); - recupera do html a tag h1 que é o título
// titulo.innerHTML = 'Jogo do número secreto'; - reuperado do html a tag h1, permite que escrevamos o título pelo JS

// var paragrafo = document.querySelector ('p'); - recupera do html a tag p que é o parágrafo.
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10.'; - permite escrever pelo JS no html um parágrafo.

var listaDeNumerosSorteados = [];
var numeroLimite = 100;
var secretNumber = gerarNumeroAleatorio();
chute = 1; // contador do jogo

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
        var concordancia = chute > 1 ? 'chutes' : 'chute'
        var mensagemTentativas = ` Você descobriu o número com ${chute} ${concordancia}!`; 
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    } else if (chuteDoTrouxa < secretNumber) {
        exibirTextoNaTela('h1', 'ERRRRRROUU');
        exibirTextoNaTela('p', ' o número é maior!');
    } if (chuteDoTrouxa > secretNumber) {
        exibirTextoNaTela('h1', 'ERRRRRROUU');
        exibirTextoNaTela('p', ' o número é menor!')
    } chute++;
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
// a função "titulo.innerHTML" nos permite agora que declaremos o título e especifiquemos em java onde queremos alterar o código em HTML, mudar o texto no HTML que aparecerá na tela.
// h1 é a "Head" (cabeça) ou título principal no HTML.
// podemos usar uma função que guarde um valor de tag para que possamos sempre alterar nosso código sem que seja necessário ficar reescrevendo novos documents.querySelector e .innerHTML.
// é necessario usar o return para que o código armazene o número aleatório na variável, caso contrário, ele não o fará.
// Arrays são como variáveis, que armazenam mais de uma informação. Na verdade são listas, e são especificadas por colchetes []. O primeiro item dentro de uma array tem o índice 0; o segundo, 1 e assim por diante. De forma que para chamar um item específico dentro de uma array é necessário que se chame por sua posição.
// chamar o nome da array e colocar .length no final nos mostrará a quantidade de itens dentro da array.
// adicionar ".push" permite que você insira mais um elemento à lista.
//chamar o nome da array e acionar ".pop()" removerá o último item da array.
// a função responsiveVoice permite que o texto seja narrado. O primeiro argumento, indicamos o que queremos que seja narrado, o segundo entre aspas, a linguagem, e o terceiro entre chaves e com a palavra rate "{rate: 1.2}", a velocidade.
