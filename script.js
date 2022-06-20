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
// estrutura de repetição para as letras das palavras sorteadas
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
// lista letras
// separando as letras da string anterior pelo .split
// ex.: letras[0]=a | letras[1]=b
let letras = alfabeto.split("");

// estrutura de repetição para mostrar as letras de botão
for (posicao = 0; posicao < letras.length; posicao++) {
    // criando variável botao e o atribue o elemento button
    let botao = document.createElement("button");
    // põe em letra o texto que está na tal posição da lista letras com o createTextNode
    let letra = document.createTextNode(letras[posicao]);
    
    // pondo no botão o texto que está em letra 
    botao.appendChild(letra);
    // onclick para chamar a função escolheLetra cada vez que um botão é clicado
    botao.setAttribute('onclick', 'escolheLetra(\''+letras[posicao]+'\')');
    // colocando id nos button com a própria letra
    // ex.: <button onclick="escolheLetra('a')" id="a">a</button>
    botao.setAttribute('id', letras[posicao]);

    // criando variável div e o atribue o elemento que tem o id letras
    let div = document.getElementById("letras");
    // adicionando o botao dentro da div criada anteriormente com o appenChild
    div.appendChild(botao);
}

// função para a escolha letra que tem como parâmetro a letra clicada pelo usuário
// verificar se tem tal letra na palavra em questão
function escolheLetra(letra) {

    let acertou = false;

    // estrutura de repetição para percorrer a palavra
    for (posicao = 0; posicao < palavra.length; posicao++) {
        // se a letra for encontrada
        if (letra === palavra[posicao]) {
            // colocamos ela no span onde o id = posicao
            let span = document.getElementById(posicao);
            // criando variável l para a atribuir a letra em questão
            let l = document.createTextNode(letra);

            // adicionando ao span a letra que está em na variável l
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