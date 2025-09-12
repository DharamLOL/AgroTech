import React, { useState, useEffect } from "react";
import styles from "../css/Vendas.module.css";
import Header from "../components/Header";
import { produtos } from "../data"; // Assumindo que seus produtos estão aqui
 // Substitua pelo caminho da sua imagem de banner

function Vendas() {
  // Lógica de estado e funções
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Geral');
  const [itensDoCarrinho, setItensDoCarrinho] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState(produtos);
  const [searchTerm, setSearchTerm] = useState('');
  

  const categorias = ['Geral', 'Frutas', 'Verduras', 'Laticínios'];

  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  
  useEffect(() => {
    let produtosTemporarios = produtos;

    if (categoriaSelecionada !== 'Geral') {
      produtosTemporarios = produtosTemporarios.filter(
        (produto) => produto.categoria === categoriaSelecionada
      );
    }

    if (searchTerm) {
      produtosTemporarios = produtosTemporarios.filter((produto) =>
        produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setProdutosFiltrados(produtosTemporarios);
  }, [categoriaSelecionada, searchTerm]);

  
  const adicionarAoCarrinho = (produto) => {
    const itemExistente = itensDoCarrinho.find((item) => item.id === produto.id);
    if (itemExistente) {
      const novosItens = itensDoCarrinho.map((item) =>
        item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
      );
      setItensDoCarrinho(novosItens);
    } else {
      setItensDoCarrinho([...itensDoCarrinho, { ...produto, quantidade: 1 }]);
    }
  };

  
  const removerDoCarrinho = (produtoId) => {
    const novosItens = itensDoCarrinho.filter((item) => item.id !== produtoId);
    setItensDoCarrinho(novosItens);
  };
  
  
  const aumentarQuantidade = (produtoId) => {
    const novosItens = itensDoCarrinho.map((item) =>
      item.id === produtoId ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    setItensDoCarrinho(novosItens);
  };

  
  const diminuirQuantidade = (produtoId) => {
    const itemExistente = itensDoCarrinho.find((item) => item.id === produtoId);
    if (itemExistente.quantidade > 1) {
      const novosItens = itensDoCarrinho.map((item) =>
        item.id === produtoId ? { ...item, quantidade: item.quantidade - 1 } : item
      );
      setItensDoCarrinho(novosItens);
    } else {
      removerDoCarrinho(produtoId);
    }
  };

 
  const totalPedido = itensDoCarrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  return (
    <div className={styles.vendasContainer}>
      <Header />
      <section className={styles.secaoBanner}>
            <div className={styles.bannerConteudo}>
              <h3>Salvar alimentos é cuidar do planeta e alimentar quem precisa.</h3>
              <button className={styles.saibaMais}>Saiba mais →</button>
            </div>
          </section>

      <div className={styles.vendasContent}>
        <main className={styles.vendasMain}>
          <section className={styles.secaoProdutos}>
            <div className={styles.headerProdutos}>
              <div className={styles.categorias}>
                {categorias.map((categoria) => (
                  <button
                    key={categoria}
                    onClick={() => setCategoriaSelecionada(categoria)}
                    className={`${styles.btnCategoria} ${categoria === categoriaSelecionada ? styles.ativo : ''}`}
                  >
                    {categoria}
                  </button>
                ))}
              </div>
              <div className={styles.containerPesquisa}>
                <input 
                  type="text" 
                  placeholder="Pesquisar produtos..." 
                  className={styles.barraPesquisa}
                  onChange={handleSearch}
                  value={searchTerm}
                />
              </div>
            </div>
            <div className={styles.listaProdutos}>
              {produtosFiltrados.map((produto) => (
                <div key={produto.id} className={styles.cardProduto}>
                  <img src={produto.imagem} alt={produto.nome} />
                  <h4>{produto.nome}</h4>
                  <p>R${produto.preco.toFixed(2)}</p>
                  <button onClick={() => adicionarAoCarrinho(produto)}>
                    Adicionar
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
        <div className={styles.carrinho}>
          <h3>Meu pedido</h3>
          <div className={styles.carrinhoConteudo}>
            {itensDoCarrinho.length > 0 ? (
              itensDoCarrinho.map((item) => (
                <div key={item.id} className={styles.itemCarrinho}>
                  <img src={item.imagem} alt={item.nome} className={styles.imagemItemCarrinho} />
                  <div className={styles.detalhesItem}>
                    <h4>{item.nome}</h4>
                    <p>R${item.preco.toFixed(2)}</p>
                    <div className={styles.controlesQuantidade}>
                      <button onClick={() => diminuirQuantidade(item.id)}>-</button>
                      <span>{item.quantidade}</span>
                      <button onClick={() => aumentarQuantidade(item.id)}>+</button>
                    </div>
                  </div>
                  <button onClick={() => removerDoCarrinho(item.id)} className={styles.btnRemover}>
                    🗑️
                  </button>
                </div>
              ))
            ) : (
              <p>Seu carrinho está vazio</p>
            )}
          </div>
          
          {itensDoCarrinho.length > 0 && (
            <div className={styles.resumoPedido}>
              <div className={styles.linhaResumo}>
                <span>Total</span>
                <span>R${totalPedido.toFixed(2)}</span>
              </div>
              <button className={styles.btnComprar}>Comprar agora</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Vendas;