// função para mostrar e ocultar o menu hamburger dos telefones
  
  function clickMenu() {
    if(itens.style.display == 'block' ) {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}



// Lista de produtos
const inventario = [
    {
      nome: "Antonio Bandeiras",
      descricao: "eau de parfum",
      categoria: "perfumes",
      imagem: "../imgs/ab-foto-p.jpg",
    },
    {
      nome: "Dolores P. Femme",
      descricao: "eau de parfum",
      categoria: "perfumes",
      imagem: "../imgs/dlr-foto-p.jpg",
    },
    {
      nome: "Zara Man",
      descricao: "eau de parfum",
      categoria: "perfumes",
      imagem: "../imgs/zr-foto-p.jpg",
    },
    {
      nome: "Gentle Magic",
      descricao: "skin serum",
      categoria: "skincare",
      imagem: "../imgs/gm2-foto-p.jpg",
    },
    {
      nome: "Yves Rocher",
      descricao: "Creme",
      categoria: "skincare",
      imagem: "../imgs/yr-foto-g.jpg",
    },
    {
      nome: "Bebeauty",
      descricao: "skin gel",
      categoria: "skincare",
      imagem: "../imgs/bb-foto-p.jpg",
    },
    {
      nome: "Zara 2",
      descricao: "eau de parfum",
      categoria: "perfumes",
      imagem: "../imgs/zr2-foto-p.jpg",
    },
    {
      nome: "Yves Rocher 2",
      descricao: "Creme",
      categoria: "skincare",
      imagem: "../imgs/yr2-foto-p.jpg",
    },
    {
      nome: "Antonio Bandeiras",
      descricao: "eau de parfum",
      categoria: "perfumes",
      imagem: "../imgs/ab-foto-p.jpg",
    },
    {
      nome: "Dolores P. Femme",
      descricao: "eau de parfum",
      categoria: "perfumes",
      imagem: "../imgs/dlr-foto-p.jpg",
    },
    {
      nome: "Zara Man",
      descricao: "eau de parfum",
      categoria: "perfumes",
      imagem: "../imgs/zr-foto-p.jpg",
    },
    {
      nome: "Gentle Magic",
      descricao: "skin serum",
      categoria: "skincare",
      imagem: "../imgs/gm2-foto-p.jpg",
    },
    {
      nome: "Yves Rocher",
      descricao: "Creme",
      categoria: "skincare",
      imagem: "../imgs/yr-foto-g.jpg",
    },
    {
      nome: "Bebeauty",
      descricao: "skin gel",
      categoria: "skincare",
      imagem: "../imgs/bb-foto-p.jpg",
    },
    {
      nome: "Zara 2",
      descricao: "eau de parfum",
      categoria: "perfumes",
      imagem: "../imgs/zr2-foto-p.jpg",
    },
    {
      nome: "Yves Rocher 2",
      descricao: "Creme",
      categoria: "skincare",
      imagem: "../imgs/yr2-foto-p.jpg",
    }
  ];
  

// Função para adicionar produtos dinamicamente ao HTML
// Modificando a função adicionarProdutos para aceitar um argumento de categoria
function adicionarProdutos(categoria) {
  const produtosSection = document.querySelector(".mais-vendidos");

  produtosSection.innerHTML = ''; // Limpar a seção de produtos antes de adicionar os novos produtos

  inventario.forEach((produto) => {
      if (categoria === "todos" || produto.categoria === categoria) {
          const produtoSection = document.createElement("section");
          produtoSection.classList.add("produto");

          produtoSection.innerHTML = `
              <picture>
                  <img src="${produto.imagem}" alt="${produto.nome}">
              </picture>
              <h4 class="nome">${produto.nome}</h4>
              <p class="descricao">${produto.descricao}</p>
              <p class="categoria">${produto.categoria}</p>
          `;

          produtosSection.appendChild(produtoSection);
      }
  });
}

// Adicione um evento de mudança ao seletor filtro-categoria
const filtroCategoria = document.getElementById('filtro-categoria');
filtroCategoria.addEventListener('change', function() {
    // Obtém o valor selecionado do seletor
    const categoriaSelecionada = filtroCategoria.value;
    // Chama a função para filtrar os produtos por categoria
    adicionarProdutos(categoriaSelecionada);
});

// Chamar a função para adicionar os produtos ao carregar a página
window.addEventListener("load", () => {
  adicionarProdutos("todos");
});








// Função de busca
const formBusca = document.getElementById('iFormBusca');
formBusca.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    const termoBusca = document.getElementById('buscar').value.trim().toLowerCase(); // Obtém o termo de busca e limpa espaços em branco e converte para minúsculas

    // Filtrar produtos que correspondem ao termo de busca
    const produtosFiltrados = inventario.filter(produto => {
        const nomeProduto = produto.nome.toLowerCase(); // Convertendo o nome do produto para minúsculas
        const descricaoProduto = produto.descricao.toLowerCase(); // Convertendo a descrição do produto para minúsculas
        return nomeProduto.includes(termoBusca) || descricaoProduto.includes(termoBusca);
    });

    // Exibir resultados da busca
    const produtosSection = document.querySelector('.mais-vendidos');
    produtosSection.innerHTML = produtosFiltrados.length > 0 ? 
        produtosFiltrados.map(produto => `
            <section class="produto" id="produto-${inventario.indexOf(produto) + 1}">
                <picture>
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </picture>
                <h4 class="nome">${produto.nome}</h4>
                <p class="descricao">${produto.descricao}</p>
                <p class="categoria">${produto.categoria}</p>
            </section>
        `).join('') :
        '<p>Nenhum resultado encontrado.</p>';
});
  
 
  







//Funções para o carousel
document.addEventListener('DOMContentLoaded', function() {
  const items = [
      { image: '../imgs/ab-foto-p.jpg', title: 'António Bandeiras', description: 'eau de parfum' },
      { image: '../imgs/bb-foto-p.jpg', title: 'Bebeauty', description: 'skin Gel' },
      { image: '../imgs/gm2-foto-p.jpg', title: 'Gentle magic', description: 'skin serum' },
      { image: '../imgs/zr2-foto-p.jpg', title: 'Zara Man', description: 'eau de parfum' },
      { image: '../imgs/yr2-foto-p.jpg', title: 'Yves Rocher ', description: 'Creme' },
      { image: '../imgs/dlr-foto-p.jpg', title: 'Dolores P. Femme', description: 'eau de parfum' }
      // Adicione mais itens conforme necessário
  ];

  const carouselContainer = document.querySelector('.carousel-container');

  items.forEach(item => {
      const newItem = document.createElement('div');
      newItem.classList.add('carousel-item');
      newItem.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <div class="carousel-item-content">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
          </div>
      `;
      carouselContainer.appendChild(newItem);
  });


  $(document).ready(function() {
    $('.carousel-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        prevArrow: '<button class="prev">&#10094;</button>',
        nextArrow: '<button class="next">&#10095;</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
  });

});


  





 
  /*
  // Função para exibir detalhes do produto em uma janela modal
  function exibirDetalhesProduto(produtoId) {
    const produto = inventario[produtoId - 1]; // Supondo que o ID do produto corresponda ao seu índice no inventário
    const modal = document.getElementById('detalhesModal');
    
    // Atualizar o conteúdo da modal com os detalhes do produto
    modal.querySelector('.modal-title').textContent = produto.nome;
    modal.querySelector('.modal-image').src = produto.imagem;
    modal.querySelector('.modal-description').textContent = produto.descricao;
    modal.querySelector('.modal-price').textContent = produto.preco;
  
    // Exibir a modal
    modal.style.display = 'block';
  }
  
  // Chamar a função para exibir detalhes do produto ao clicar em um produto
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('produto')) {
        const produtoId = parseInt(event.target.id.split('-')[1]); // Obter o ID do produto do ID da seção do produto
        exibirDetalhesProduto(produtoId);
    }
  });
  
  // Fechar a modal ao clicar no botão de fechar
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('detalhesModal').style.display = 'none';
  });
  
  
  
  
  
  
  
  // Função para adicionar avaliação e comentário de um produto
  function adicionarAvaliacaoComentario(produtoId, avaliacao, comentario) {
    const produto = inventario[produtoId - 1]; // Supondo que o ID do produto corresponda ao seu índice no inventário
    
    // Adicionar avaliação e comentário ao objeto do produto
    produto.avaliacao = avaliacao;
    produto.comentario = comentario;
  }
  
  // Exemplo de uso:
  adicionarAvaliacaoComentario(1, 4.5, "Ótimo produto, entrega rápida!");
  
  // Função para exibir avaliação e comentário de um produto
  function exibirAvaliacaoComentario(produtoId) {
    const produto = inventario[produtoId - 1]; // Supondo que o ID do produto corresponda ao seu índice no inventário
    
    // Exibir avaliação e comentário
    console.log(`Avaliação: ${produto.avaliacao}`);
    console.log(`Comentário: ${produto.comentario}`);
  }
  
  // Exemplo de uso:
  exibirAvaliacaoComentario(1);
  
  
  
  
  // Função para adicionar um produto ao carrinho de compras
  function adicionarAoCarrinho(produtoId, quantidade) {
    // Lógica para adicionar o produto ao carrinho de compras e atualizar a exibição do carrinho
  }
  
  
  // Função para remover um produto do carrinho de compras
  function removerDoCarrinho(produtoId) {
    // Lógica para remover o produto do carrinho de compras e atualizar a exibição do carrinho
  }
  
  
  
  
  // Função para aplicar um cupom de desconto ao carrinho de compras
  function aplicarCupomDeDesconto(codigo) {
    // Lógica para aplicar o cupom de desconto e recalcular o total do pedido
  }
  
  
  
  
  // Função para filtrar produtos por categoria
  function filtrarPorCategoria(categoria) {
    const produtosSection = document.querySelector(".produtos-disponiveis");
    produtosSection.innerHTML = ''; // Limpar os produtos existentes antes de exibir os filtrados
  
    inventario.forEach((produto) => {
        if (produto.categoria === categoria) {
            // Criar e adicionar o produto à seção de produtos
            const produtoSection = criarProdutoSection(produto);
            produtosSection.appendChild(produtoSection);
        }
    });
  }
  
  
  
  
  
  // Função para verificar o login do usuário
  function verificarLogin(email, senha) {
    // Lógica para verificar o login do usuário (pode ser integrado com um backend)
  }
  
  // Função para criar uma nova conta de usuário
  function criarConta(nome, email, senha) {
    // Lógica para criar uma nova conta de usuário (pode ser integrado com um backend)
  }
  
  // Função para atualizar os detalhes do perfil do usuário
  function atualizarPerfil(usuarioId, novosDetalhes) {
    // Lógica para atualizar os detalhes do perfil do usuário (pode ser integrado com um backend)
  }
  
  
  
  
  
  // Função para enviar um comentário
  function enviarComentario(produtoId, comentario) {
    // Lógica para enviar o comentário ao servidor (pode ser integrado com um backend)
  }
  
  // Função para enviar uma avaliação
  function enviarAvaliacao(produtoId, avaliacao) {
    // Lógica para enviar a avaliação ao servidor (pode ser integrado com um backend)
  }
  
  
  
  
  // Função para exibir uma notificação
  function exibirNotificacao(titulo, mensagem) {
    // Lógica para exibir a notificação na interface do usuário
  }
  
  
  
  
  // Função para compartilhar um produto nas mídias sociais
  function compartilharProduto(nomeProduto, linkProduto) {
    // Lógica para compartilhar o produto nas mídias sociais
  }
  
  
  // Função para rastrear o status de um pedido
  function rastrearPedido(numeroDoPedido) {
    // Lógica para obter e exibir o status do pedido (pode ser integrado com um backend)
  }
  
  
  // Função para recomendar produtos com base no histórico de navegação do usuário
  function recomendarProdutos(usuarioId) {
    // Lógica para recomendar produtos com base no histórico de navegação do usuário (pode ser integrado com um backend)
  }
  
  */