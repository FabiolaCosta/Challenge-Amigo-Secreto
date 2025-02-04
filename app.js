let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if(nome == '' ){
        alert('Por favor, informe um nome válido.');
        return;
    }

    amigos.push(nome)
    document.getElementById('amigo').value = '';
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if(amigos.length == 0){
        alert('Por favor, adicione um nome na lista.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `<li>${nomeSorteado}</li>`;
}