let filmes = [];
let adicionando = -1;

function adicionar() {
    const tipoSelecionado = document.querySelector('input[name="tipo"]:checked');
    const tipo = tipoSelecionado ? tipoSelecionado.value : "";
    const titulo = document.getElementById("titulo").value.trim();
    const genero = document.getElementById("genero").value.trim();
    const ano = parseInt(document.getElementById("ano").value);
    const avaliacaoSelecionada = document.querySelector('input[name="avaliacao"]:checked');
    const avaliacao = avaliacaoSelecionada ? parseInt(avaliacaoSelecionada.value) : NaN;
    const comentario = document.getElementById("comentario").value.trim();

    if (!tipo || !titulo || !genero || isNaN(ano) || isNaN(avaliacao) || !comentario) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const novo = { tipo, titulo, genero, ano, avaliacao, comentario };

    if (adicionando === -1) {
        filmes.push(novo);
    } else {
        filmes[adicionando] = novo;
        adicionando = -1;
    }

    // Limpar formulário
    document.querySelectorAll('input[name="tipo"]').forEach(el => el.checked = false);
    document.getElementById("titulo").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("ano").value = "";
    document.querySelectorAll('input[name="avaliacao"]').forEach(el => el.checked = false);
    document.getElementById("comentario").value = "";

    atualizarTabela();
}

function atualizarTabela() {
    const tbody = document.querySelector("#tabela-filmes tbody");
    tbody.innerHTML = "";

    filmes.forEach((filme, index) => {
        const linha = `
            <tr>
                <td>${filme.tipo}</td>
                <td>${filme.titulo}</td>
                <td>${filme.genero}</td>
                <td>${filme.ano}</td>
                <td>${filme.avaliacao}</td>
                <td>${filme.comentario}</td>
                <td>
                    <button class="edit" onclick="editarFilme(${index})">Editar</button>
                    <button class="delete" onclick="excluirFilme(${index})">Excluir</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += linha;
    });
}

function editarFilme(index) {
    const filme = filmes[index];

    document.querySelector(`input[name="tipo"][value="${filme.tipo}"]`).checked = true;
    document.getElementById("titulo").value = filme.titulo;
    document.getElementById("genero").value = filme.genero;
    document.getElementById("ano").value = filme.ano;
    document.querySelector(`input[name="avaliacao"][value="${filme.avaliacao}"]`).checked = true;
    document.getElementById("comentario").value = filme.comentario;
    adicionando = index;
}

function excluirFilme(index) {
    if (confirm("Deseja excluir este Filme/Série?")) {
        filmes.splice(index, 1);
        atualizarTabela();
    }
}
