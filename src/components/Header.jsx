import React from "react";
import styles from "../css/Header.module.css";
import logo from "../assets/logo-greensafe.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={logo} alt="Logo" />
      </div>

      <nav className={styles.headerNav}>
        <button className={styles.navButton}>Início</button>
        <button className={styles.navButton}>Produtos</button>
        <button className={styles.navButton}>Sobre</button>
        <button className={styles.navButton}>Contato</button>
        <button className={styles.botaoPerfil}>
          <img src="../assets/foto-perfil.jpg"/>
        </button>
      </nav>
    </header>
  );
};

export default Header;
