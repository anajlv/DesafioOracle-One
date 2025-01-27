//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//armazenando os dados
const listaDeNomes = document.getElementById('listaAmigos');
const nomeSorteado = document.getElementById('resultado');
// Criando uma lista vazia
let array = [];

// Função para adicionar nome
function adicionarAmigo() {
    let inputName = document.getElementById('amigo').value;
    if (inputName === '') {
        alert('Por favor, informe um nome a ser sorteado!');
    } else {
        // Adiciona o nome ao array
        array.push(inputName);

        // Limpa o campo de entrada e os resultados
        document.getElementById('amigo').value = '';
        nomeSorteado.innerHTML = '';
        listaDeNomes.innerHTML = '';

        // Atualiza a lista na interface
        array.forEach(listAmigos => {
            const itemLista = document.createElement("li");
            const paragrafo = document.createElement("p");
            paragrafo.textContent = listAmigos;
            itemLista.appendChild(paragrafo);
            listaDeNomes.appendChild(itemLista); 
        });
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verifica se há nomes na lista
    if (array.length > 0) {
        // Limpa a lista e o resultado
        listaDeNomes.innerHTML = '';
        nomeSorteado.innerHTML = '';

        // Gera um número entre 0 e o tamanho da lista
        let index = Math.floor(Math.random() * array.length);

        // Exibe o resultado
        nomeSorteado.innerHTML = `O seu amigo secreto é: ${array[index]}`;
    } else {
        alert('Ou, ou... ainda não há nenhum amigo aqui! Adicione nomes antes de sortear.');
    }
}
