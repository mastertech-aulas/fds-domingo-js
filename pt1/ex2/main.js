let mensagem = document.querySelector('.mensagem');

function mudarMensagem(){
    mensagem.style.backgroundColor = 'blue';
    mensagem.innerHTML = 'Fui clicado :)';
}

mensagem.onclick = mudarMensagem;