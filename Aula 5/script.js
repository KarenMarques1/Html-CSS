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

   function atualizarTabela(){
      const tbody = document.querySelector("#tabela-produtos tbody");  //hashtag faz a menção ao id
      tbody.innerHTML = "";

      produtos.forEach((produto,index) =>{
        const linha = `
      <tr>
          <td>${produto.nome}</td> 
          <td>${produto.preco.toFixed(2)}</td>
          <td>${produto.quantidade}</td>
          <td>${(produto.preco * produto.quantidade).toFixed(2)}</td>
          <td>
             <button class="edit" onclick="editarProduto(${index})">Editar</button>
             <button class="delete" onclick="excluirProduto(${index})">Excluir</button>
          </td>  
       </tr>
         `;
         tbody.innerHTML += linha;
      })

   }   

   function editarProduto(index){
     const produto = produtos [index];
     document.getElementById("nome").value = produto.nome;
     document.getElementById("preco").value = produto.preco;
     document.getElementById("quantidade").value = produto.quantidade;
     adicionando = index;
   }

   function excluirProduto(index){
      if(confirm("Deseja excluir este produto?")){
         produtos.splice(index,1);
         atualizarTabela();
      }
   }

   

