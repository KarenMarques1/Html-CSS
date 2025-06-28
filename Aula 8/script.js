const filmes = [
  {
    titulo: "Clube da Luta",
    genero: "Drama",
    imagem: "img/clube_luta.jpg",
    descricao: "Dois homens formam um clube secreto para lutar.",
    ano: 1999,
    elenco: "Brad Pitt, Edward Norton",
    avaliacao: "8.8"
  },
  {
    titulo: "Forrest Gump",
    genero: "Drama",
    imagem: "img/forrest_gump.jpg",
    descricao: "A história de um homem com um coração gigante.",
    ano: 1994,
    elenco: "Tom Hanks",
    avaliacao: "8.8"
  },
  {
    titulo: "Gladiador",
    genero: "Ação",
    imagem: "img/Gladiador.jpg",
    descricao: "Um general romano luta por vingança.",
    ano: 2000,
    elenco: "Russell Crowe",
    avaliacao: "8.5"
  },
  {
    titulo: "Inception",
    genero: "Suspense",
    imagem: "img/inception.jpg",
    descricao: "Roubo de sonhos em múltiplos níveis de consciência.",
    ano: 2010,
    elenco: "Leonardo DiCaprio",
    avaliacao: "8.8"
  },
  {
    titulo: "Interstellar",
    genero: "Suspense",
    imagem: "img/Interstellar.jpg",
    descricao: "Viagem espacial para salvar a humanidade.",
    ano: 2014,
    elenco: "Matthew McConaughey",
    avaliacao: "8.6"
  },
  {
    titulo: "Matrix",
    genero: "Ação",
    imagem: "img/matrix.jpg",
    descricao: "Realidade virtual e luta contra máquinas.",
    ano: 1999,
    elenco: "Keanu Reeves",
    avaliacao: "8.7"
  },
  {
    titulo: "O Poderoso Chefão",
    genero: "Drama",
    imagem: "img/poderoso_chefao.jpg",
    descricao: "Saga da família mafiosa Corleone.",
    ano: 1972,
    elenco: "Marlon Brando, Al Pacino",
    avaliacao: "9.2"
  },
  {
    titulo: "Pulp Fiction",
    genero: "Suspense",
    imagem: "img/Pulp_fiction.jpg",
    descricao: "Histórias interligadas do submundo do crime.",
    ano: 1994,
    elenco: "John Travolta, Uma Thurman",
    avaliacao: "8.9"
  },
  {
    titulo: "O Senhor dos Anéis",
    genero: "Ação",
    imagem: "img/senhor_aneis.jpg",
    descricao: "Uma jornada para destruir um anel poderoso.",
    ano: 2001,
    elenco: "Elijah Wood",
    avaliacao: "8.8"
  },
  {
    titulo: "Titanic",
    genero: "Drama",
    imagem: "img/Titanic.jpg",
    descricao: "Amor a bordo do navio Titanic.",
    ano: 1997,
    elenco: "Leonardo DiCaprio, Kate Winslet",
    avaliacao: "7.8"
  }
];

function exibirFilmes(lista) {
  $("#galeria").empty();
  lista.forEach(filme => {
    const card = $(`
      <div class="card" data-genero="${filme.genero}" data-titulo="${filme.titulo.toLowerCase()}">
        <img src="${filme.imagem}" alt="${filme.titulo}" />
        <h3>${filme.titulo}</h3>
        <p>${filme.descricao}</p>
      </div>
    `).hide().fadeIn(400);

    card.on("click", () => mostrarDetalhes(filme));
    $("#galeria").append(card);
  });
}

function mostrarDetalhes(filme) {
  $("#popup-titulo").text(filme.titulo);
  $("#popup-detalhes").html(`
    <p><strong>Gênero:</strong> ${filme.genero}</p>
    <p><strong>Ano:</strong> ${filme.ano}</p>
    <p><strong>Elenco:</strong> ${filme.elenco}</p>
    <p><strong>Avaliação:</strong> ${filme.avaliacao}</p>
    <p>${filme.descricao}</p>
  `);
  $("#popup").fadeIn();
}

function aplicarFiltroGenero(genero) {
  if (genero === "Todos") {
    $(".card").fadeIn();
  } else {
    $(".card").each(function() {
      const g = $(this).data("genero");
      if (g === genero) {
        $(this).fadeIn();
      } else {
        $(this).fadeOut();
      }
    });
  }
}

function aplicarBusca(texto) {
  texto = texto.toLowerCase();
  $(".card").each(function() {
    const titulo = $(this).data("titulo");
    if (titulo.includes(texto)) {
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  });
}

$(document).ready(function() {
  exibirFilmes(filmes);

  $(".filtro").click(function() {
    const genero = $(this).data("genero");
    aplicarFiltroGenero(genero);
    $("#busca").val("");
  });

  $("#busca").on("input", function() {
    const texto = $(this).val();
    aplicarBusca(texto);
  });

  $("#limpar").click(function() {
    $("#busca").val("");
    exibirFilmes(filmes);
  });

  $("#fechar").click(function() {
    $("#popup").fadeOut();
  });

  $("#popup").click(function(e) {
    if (e.target === this) {
      $(this).fadeOut();
    }
  });
});
