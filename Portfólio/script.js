const projetos = document.querySelectorAll('.card a');

projetos.forEach(link => {
  link.addEventListener('click', (e) => {
    alert('Este link abrirá o projeto em uma nova aba.');
  });
});


  