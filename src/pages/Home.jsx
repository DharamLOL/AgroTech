import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from '../css/Home.module.css'; 
import Header from '../components/Header';
import candysShopImg from '../assets/candysShop.jpg';
import fruitImg from '../assets/fruit.jpg';
import fruitsHouseImg from '../assets/fruitsHouse.jpg';
import bakeryHouseImg from '../assets/bakeryHouse.jpg';
import iconShopImg from '../assets/icon-shop.png';

const ofertasDoDia = [
  { id: 1, img: candysShopImg, nome: 'SweetSpace', preco: '10,00', desc: 'Sobremesas variadas' },
  { id: 2, img: fruitImg, nome: 'HortStreet', preco: '6,00', desc: 'Hortifruti' },
  { id: 3, img: fruitsHouseImg, nome: 'NaturalNow', preco: '8,00', desc: 'Salada e snacks' },
  { id: 4, img: bakeryHouseImg, nome: 'Pão da Vila', preco: '5,00', desc: 'Pães e bolos' },
  { id: 5, img: candysShopImg, nome: 'SweetSpace', preco: '10,00', desc: 'Sobremesas variadas' },
  { id: 6, img: fruitImg, nome: 'HortStreet', preco: '6,00', desc: 'Hortifruti' },
  { id: 7, img: fruitsHouseImg, nome: 'NaturalNow', preco: '8,00', desc: 'Salada e snacks' },
  { id: 8, img: bakeryHouseImg, nome: 'Pão da Vila', preco: '5,00', desc: 'Pães e bolos' },
];

const nossaRede = [
    { id: 1, nome: 'Tempero de casa', desc: 'Comidas caseiras e temperos regionais para ONGs. Parceiro há 4 anos.' },
    { id: 2, nome: 'Super Eco', desc: 'Supermercado parceiro na zona sul. Doações semanais desde 2020.' },
    { id: 3, nome: 'VerdeMais', desc: 'Distribuidor de hortaliças frescas. Fornece alimentos para 15 projetos sociais.' },
];

function Home() {
  return (
    <div className={styles.homeContainer}>

        <Header />

        <div className={styles.hero}>
            <h1>Bem vindo, FulanodeSalles</h1>
            <p>Pesquise por suas empresas e lugares favoritos ou explore novas oportunidades</p>
        </div>

        <div className={styles.section}>
            <h3>AÇÕES</h3>
            <div className={styles.sectionContent}>
            <div className={styles.buttonAction}>Quero doar</div>
            <div href="/fale-conosco" className={styles.buttonAction}>Patrocinado</div>
            <a href="/fale-conosco">
                <div className={styles.buttonAction}>Fale conosco</div>
            </a>
            <div className={styles.buttonAction}>Voluntariar</div>
            <div className={styles.buttonAction}>Cadastrar ONG</div>
            </div>
        </div>

        <div className={styles.section}>
            <h3>OFERTAS DO DIA</h3>
            <div className={styles.sectionContent}>
            {ofertasDoDia.map((oferta) => (
                <Link key={oferta.id} to="/Vendas" className={styles.cardLink}>
                <div className={styles.cardOffer}>
                    <img src={oferta.img} alt="Produto" />
                    <div className={styles.offer}>
                    <h4>{oferta.nome}</h4>
                    <h6>R${oferta.preco}</h6>
                    <p>{oferta.desc}</p>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        </div>

        <div className={styles.section}>
            <h3>CONHEÇA NOSSA REDE</h3>
            <div className={styles.sectionContent}>
                {/* Mapeando o array 'nossaRede' */}
                {nossaRede.map((parceiro) => (
                    <div key={parceiro.id} className={styles.cardNetwork}>
                        <img src={iconShopImg} className={styles.iconShop} alt="Ícone de loja" />
                        <div className={styles.offer}>
                            <h4 className={styles.cardNetworkTitle}>{parceiro.nome}</h4>
                            <p>{parceiro.desc}</p>
                        </div>
                        <button className={styles.btnAccess}>Acessar</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Home;