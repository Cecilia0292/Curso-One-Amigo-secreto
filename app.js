// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
let amigos = [];
const listaAmigos = document.getElementById('listaAmigos');
const amigoInput = document.getElementById('amigo');
const resultado = document.getElementById('resultado');

// Adiciona um novo amigo à lista
function adicionarAmigo() {
    const amigo = amigoInput.value.trim(); // Remove espaços em branco antes e depois do nome
    if (amigo) {
        amigos.push(amigo); // Adiciona a lista
        atualizarListaAmigos(); // Atualiza a exibição
        amigoInput.value = ''; // Limpa o campo de entrada
        console.log(amigos);
    } else {
        alert('Digite um nome válido!'); //Alertas para entradas vazias
    }
}

// Atualiza visualmente a lista de amigos sempre que houver mudanças
function atualizarListaAmigos() {
    listaAmigos.innerHTML = ''; // Limpa a lista atual
    amigos.forEach(amigo => {
        const li = document.createElement('li'); //Cria um item da lista
        li.textContent = amigo; // Adiciona o nome do amigo
        listaAmigos.appendChild(li); //Adiciona a Ul
    });
}

// Sorteia um amigo da lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.textContent = ` O amigo sorteado é: ${amigoSecreto}`; //Mostra o resultado
    limparAmigos(); // Limpa a lista após o sorteio
}

// Limpa a lista de amigos
function limparAmigos() {
    amigos = []; //REseta a lista de amigos
    atualizarListaAmigos(); // Atualiza a exibição
}
