//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let inputAmigo = document.getElementById('amigo');
let buttonAdd = document.getElementById('button-add');

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    // este if verifica se o amigo nao esta vazio
    if (amigo != '') {
        document.getElementById('amigo').value = '';
        amigos.push(amigo);
        // o let ul pega o id listaAmigos e cria um elemento li
        let ul = document.getElementById('listaAmigos');
        let li = document.createElement('li');
        li.textContent = amigo;
        // adiciona o elemento li na ul
        ul.appendChild(li);
        console.log(amigos);
    } else {
        alert('Digite um amigo válido!');
    }
}
//função para atualizar a lista de amigos
function AtualizarAmigo() {
    document.getElementById('listaAmigos').value = '';
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
    console.log(amigos[i]);
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }
    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.textContent = amigoSecreto;
    limparAmigos();
}

function limparAmigos() {
    amigos = [];
    AtualizarAmigo();
}