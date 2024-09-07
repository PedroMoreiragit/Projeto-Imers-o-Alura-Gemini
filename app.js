function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");


    let campoPesquisa = document.getElementById("campo-pesquisa").value
      
    if(!campoPesquisa){ 
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar um nome de um atleta ou esporte.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Verifica se a seção foi encontrada
    if (section) {
      // Itera sobre os dados da pesquisa
      for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

          // Concatena o HTML de cada resultado à string 'resultados'
        resultados += `
        <div class="item-resultado">
          <h2> <a href="#" target="_blank"> ${dado.titulo} </a></h2>
          <p class="descricao-meta"> ${dado.descricao} </p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
        }

        
      }
    } else {
      // Exibe uma mensagem de erro no console se a seção não for encontrada
      console.error("Elemento com o ID 'resultados-pesquisa' não encontrado.");
    }
  if(!resultados){
    resultados = "<p>Nada foi encontrado!</p>"
  }
    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  };