let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if(nome == '' ){
        alert('Por favor, informe um nome válido.');
        return;
    }

    amigos.push(nome)
    document.getElementById('amigo').value = '';
    console.log(amigos)
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}