import React from "react";
import styles from "../css/Header.module.css";
import { Link } from 'react-router-dom';
import logo from "../assets/logo-greensafe.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={logo} alt="Logo" />
      </div>

      <nav className={styles.headerNav}>
        <Link to="/Home" ><button href="/Home" className={styles.navButton}>Home</button></Link>
        
        
        <button className={styles.navButton}>Produtos</button>
        <button className={styles.navButton}>Sobre</button>
        <button className={styles.navButton}>Contato</button>
        <Link to="/perfilcliente" ><div className={styles.botaoPerfil}><img src="../assets/foto-perfil.jpg"/></div></Link>
      </nav>
    </header>
  );
};

export default Header;
