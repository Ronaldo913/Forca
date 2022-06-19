// lista de palavras
let palavras = ["programa", "html", "css", "bootstrap", "cliente", "aprender", "frontend", "backend", "fullstack", "desenvolvimento", "aplicativo", "jogo", "site", "software", "responsividade", "div", "listas", "javascript"];

// palavra = a palavra sorteada da lista palavras
// Math.random sortea aleatoriamente uma posição que vai até o quantidade de posições da lista
// .length tem a quantidade de posição da lista palavras
// Math.floor arredonda o número
let palavra = palavras[Math.floor(Math.random() * palavras.length)];

// números de chances
let chances = 6;
// números de acertos
let acertos = 0;

// qual imagem a aparecerá conforme os erros
let imagem = 0;

// auxiliar
let posicao;

// manipulando o dom
for (posicao = 0; posicao < palavra.length; posicao++) {
    // criando variável span e o atribue o elemento span
    let span = document.createElement("span");
    // colocando id nas span com o número da posição da letra na palavra
    // ex.: <span id="1"> </span>
    span.setAttribute('id', posicao);

    // criando variável div e o atribue o elemento que tem o id palavra
    let div = document.getElementById("palavra");
    // adicionando o span dentro da div criada anteriormente com o appenChild
    div.appendChild(span);
}

// atribuindo uma string com todas a letras do alfabeto
let alfabeto = "abcdefghijklmnopqrstuvwxyz";
// separando as letras da string anterior pelo .split
let letras = alfabeto.split("");

for (posicao = 0; posicao < letras.length; posicao++) {
    let botao = document.createElement("button");
    let letra = document.createTextNode(letras[posicao]);
    
    botao.appendChild(letra);
    botao.setAttribute('onclick', 'escolheLetra(\''+letras[posicao]+'\')');
    botao.setAttribute('id', letras[posicao]);

    let div = document.getElementById("letras");
    div.appendChild(botao);
}

function escolheLetra(letra) {

    let acertou = false;

    for (posicao = 0; posicao < palavra.length; posicao++) {
        if (letra === palavra[posicao]) {
            let span = document.getElementById(posicao);
            let l = document.createTextNode(letra);

            span.appendChild(l);

            let botao = document.getElementById(letra);
            botao.setAttribute('class', 'certa');
            botao.removeAttribute('onclick');

            acertos++;
            acertou = true;
        }
    }

    if (acertou === false) {
        imagem++;
        document.getElementById("forca").src = "images/forca-"+imagem+".jpg";

        var botao = document.getElementById(letra);
        botao.setAttribute('class', 'errada');
        botao.removeAttribute('onclick');

        chances--;
    }

    if (chances === 0) {
        let mensagem = document.createElement("p");
        let t1 = document.createTextNode("Você perdeu!");
        mensagem.appendChild(t1);

        let botao = document.createElement("button");
        let t2 = document.createTextNode("jogar novamente");
        
        botao.appendChild(t2);
        botao.setAttribute('class', 'novo-bt');
        botao.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");
        div.appendChild(mensagem);
        div.appendChild(botao);
    }

    if (acertos === palavra.length) {
        let mensagem = document.createElement("p");
        let t1 = document.createTextNode("Você venceu!");
        mensagem.appendChild(t1);

        let botao = document.createElement("button");
        let t2 = document.createTextNode("jogar novamente");
        
        botao.appendChild(t2);
        botao.setAttribute('class', 'novo-bt');
        botao.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");
        div.appendChild(mensagem);
        div.appendChild(botao);
    }
}