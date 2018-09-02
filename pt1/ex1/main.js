let mensagem = document.querySelector('.mensagem');
let erro = document.querySelector('.erro');
let aviso = document.querySelector('.aviso');
let sucesso = document.querySelector('.sucesso');

function mudarParaErro(){
    mensagem.style.backgroundColor = 'red';
    mensagem.innerHTML = 'Deu ruim :(';
}

function mudarParaSucesso(){
    mensagem.style.backgroundColor = 'green';
    mensagem.innerHTML = 'Deu bonzera :)';
}

function mudarParaAviso(){
    mensagem.style.backgroundColor = 'yellow';
    mensagem.innerHTML = 'Cuidado :O';
}

erro.onclick = mudarParaErro;
aviso.onclick = mudarParaAviso;
sucesso.onclick = mudarParaSucesso;
