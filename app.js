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
}