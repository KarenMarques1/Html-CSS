//declaraçao de variaveis
let produtos = []; //arraylist em branco para receber valores que o usuario inserir
let adicionando = -1; 

function adicionarProduto() {
     const nome = document.getElementById("nome").value;
     const preco = parseFloat(document.getElementById("preco").value);
     const quantidade = parseInt(document.getElementById("quantidade").value);

     //exclamacao garante que o nome nao esteja vazio, isNan garante que os dados inseridos sejam números. 
     if(!nome || isNaN(preco) || isNaN(quantidade)){
         alert("Preencha todos os campos vazios");
         return;
     }

     const produto = {nome, preco, quantidade};

     //decide entre adicionar ou editar
     if(adicionando === -1){
        produtos.push(produto); //adiciona novo
     }else{
        produtos[adicionando] = produto; //edita existente
        adicionando = -1;
     }

     document.getElementById("nome").value = "";
     document.getElementById("preco").value = "";
     document.getElementById("quantidade").value = "";

     atualizarTabela();
}
