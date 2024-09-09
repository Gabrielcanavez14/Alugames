let jogosAlugados = 0;

function contarEEXibirJogosAlugados() {
    console.log(`total de jogos alugados: ${jogosAlugados}`);

}


function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name')
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar'
        botao.classList.remove('dashboard__item__button--return');
        jogosAlugados--;

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver'
        botao.classList.add('dashboard__item__button--return');
        jogosAlugados++;

    }

    contarEEXibirJogosAlugados();
} 

//Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded'), function() {
    jogosAlugados = document.querySelectorAll('board__item__img--rented').length;
    contarEEXibirJogosAlugados();
}



